var uuid = require('yc-uuid');
var _ = require('underscore');

module.exports = {

    _remove: function (array, item) {
        var index = _.indexOf(array, item);
        if (index > -1) {
            array.splice(index, 1);
        }
    },

    _update: function (dest, src) {
        //copy src's properties to dest
        _.each(src, function (value, key) {
            dest[key] = value;
        });
    },
    _empty: function (doc) {
        //TODO: why not doc == {};
        _.each(doc, function (value, key) {
            delete doc[key];
        });
    },
    _id: function () {
        var id = this.id || 'id';
        return id;
    },
    createId: function () {
        return uuid();
    },
    get: function (collection, id) {
        var self = this;
        //use Underscore's find
        //http://underscorejs.org/#find
        //_.find(list, predicate, [context]) 
        //在list中逐项查找，返回第一个通过predicate迭代函数真值检测的元素值，如果没有值传递给测试迭代器将返回undefined。 如果找到匹配的元素，函数将立即返回，不会遍历整个list。
        return _.find(collection, function (c) {
            return c[self._id()] === id;
        });
    },
    insert: function (collection, doc) {
        //一般就返回 "id"
        var id = this._id();
        //id value
        var hasData = doc[id];
        if (hasData) {
            //如何有id的值，就去 get 一下
            var d = this.get(collection, hasData);
            if (d) {
                //empty it
                this._empty(d);
                //extend
                //http://underscorejs.org/#extend
                //_.extend(destination, *sources) 
                _.extend(d, doc);
            } else {
                collection.push(doc);
            }
        } else {
            //createId
            doc[id] = this.createId();
            collection.push(doc);
        }

        return doc;
    },
    update: function (collection, id, attrs) {
        var doc = this.get(collection, id);
        if (doc) {
            this._update(doc, attrs);
        }

        return doc;
    },
    remove: function (collection, id) {
        var doc = this.get(collection, id);
        this._remove(collection, doc);
        return doc;
    }
};