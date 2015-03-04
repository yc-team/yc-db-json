# yc-db-json
json as db for yc

> 目前依赖在 Underscore 或者 Lo-Dash 下面

## 方法如下：

#### load

加载 database，可以指定一个路径下的 json 文件，默认是当前路径下的 `db.json`

举例：

```javascript
var db = _.load();
var db = _.load('/somepath/db.json');
```

#### save

存储 database，可以指定一个路径下的 json 文件，默认是当前路径下的 `db.json`

```javascript
_.save(db);
_.save(db, '/somepath/db.json');
```

#### get(collection, id)

查询指定 collection 的一个指定 id 的数据。

```javascript
var db = {
  "user": [
    {"id": 1, "name": "yc"}
  ]
}

var user = _.get(db.user, 1);
```


#### insert(collection, doc)

添加一个 doc 到 collection，返回那条新添加的记录

```javascript
var user = _.insert(db.user, {name: 'test'});
```

#### update(collection, id, attrs)

更新指定 id 的 collection

```javascript
var user = _.update(db.user, 1, {name: 'Updated yc'});
```


#### remove(collection, id)

从指定的 collection 里面删除某个指定 id的数据

```javascript
var user = _.remove(db.user, 1);
```