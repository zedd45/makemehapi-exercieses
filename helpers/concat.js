module.exports = function(context) {
    var data = context.data.root;
    return data.name + data.suffix;
};
