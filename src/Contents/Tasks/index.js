module.exports = {
	calculate: function(o,cb)
	{
		App.upload.reader(o.docId, function(err,buffer) {
			var vibren=App.using('db').using('vibren');
			var BufferReader = App.using('buffer-reader');
			var reader = new BufferReader(buffer);
			var result = {
					presence_signal: reader.nextInt16LE(),
					numero_fichier: reader.nextInt16LE(),
					commentaire_traitement: reader.nextString(21),
					trace_source: reader.nextString(15),
					trace_sortie: reader.nextString(15),
					nombre_voies: reader.nextInt16LE(),
					coefficient_multiplicateur: [
						reader.nextDoubleLE(),
						reader.nextDoubleLE(),
						reader.nextDoubleLE(),
						reader.nextDoubleLE(),
						reader.nextDoubleLE(),
						reader.nextDoubleLE(),
						reader.nextDoubleLE(),
						reader.nextDoubleLE(),
						reader.nextDoubleLE(),
						reader.nextDoubleLE(),
						reader.nextDoubleLE(),
						reader.nextDoubleLE(),
						reader.nextDoubleLE(),
						reader.nextDoubleLE(),
						reader.nextDoubleLE()			
					],
					temps_debut: reader.nextDoubleLE(),
					temps_fin: reader.nextDoubleLE(),
					frequence_echantillonage: reader.nextDoubleLE(),
					nombre_points_voie: reader.nextInt32LE(),
					unite_x: reader.nextString(9),
					unite_y: [
						reader.nextString(9).replace(/\0/g, '').trim(),
						reader.nextString(9).replace(/\0/g, '').trim(),
						reader.nextString(9).replace(/\0/g, '').trim(),
						reader.nextString(9).replace(/\0/g, '').trim(),
						reader.nextString(9).replace(/\0/g, '').trim()
					]
			};	
			reader.seek(reader.tell()-1);
			var buf = reader.restAll();
			var bufferpack = App.using('bufferpack');
			var list=[];
			var b=new Buffer(2);
			buffer.copy(b,0,266);
			list.push(bufferpack.unpack('h',b,0));
			
			for (var ii=1;ii<buf.length-1;ii++) {
				if ((ii/2)%1==0) {
					list.push(bufferpack.unpack('h',buf,ii));
				}
			};
			
			var z=0;
			var voie=0;
			result.data=[];
			for (var ii=0;ii<list.length;ii++) {
				if (z==0) result.data[voie]=[];
				result.data[voie].push(parseFloat(list[ii][0]*result.coefficient_multiplicateur[voie]).toFixed(4));
				z++;
				if (z>result.nombre_points_voie*1) {z=0;voie++;}
			};
			for (var item in result) {
				try {
					result[item]=result[item].replace(/\0/g, '').trim();
				}catch(e) {

				};
			};
			var dta=[];
			for (var ii=0;ii<result.data.length;ii++) {
				var items=result.data[ii];
				for (var jj=0;jj<items.length;jj++) {
					dta.push({
						voie: ii,
						temps: jj,
						point: items[jj],
						acquisitionId: o.acq,
						signalId: o.sig
					});
				};
			};
			vibren.Mesures.bulkCreate(dta).catch(function(err) {
				console.log(err);
			}).then(function(success) {
				console.log(success);
			});
		});
	}
}