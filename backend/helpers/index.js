
exports.createKeyString = (fields) => {
    let keys = '';
	for (let [k, v] of Object.entries(fields)) {
		keys += `${k},`;
    }
    return keys.substring(0, keys.length - 1);
}

exports.createValString = (fields) => {

    let vals = '';
	for (let [k, v] of Object.entries(fields)) {
		vals += `'${v}',`;
	}
	return vals.substring(0, vals.length - 1);
}

exports.createSetQuery = (fields) => {

	let sets = '';
	for (let [k, v] of Object.entries(fields)) {
		sets += `${k}='${v}',`;
	}
	return sets.substring(0, sets.length - 1);
}