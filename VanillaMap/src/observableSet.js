function ObservableSet() {
    this.value = new Set();
    this.onChange = null;
}

ObservableSet.prototype.add = function(e) {
    this.value.add(e);
    if (this.onChange) {
        this.onChange(e);
    }
};

ObservableSet.prototype.delete = function(e) {
    var deleted = this.value.delete(e);
    if (deleted && this.onChange) {
        this.onChange(e);
    }
    return deleted;
};
