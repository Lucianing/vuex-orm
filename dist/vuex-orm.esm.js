if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (search, pos) {
        return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
    };
}
if (!Array.prototype.includes) {
    Array.prototype.includes = function (searchElement) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var O = Object(this);
        var len = parseInt(O.length, 10) || 0;
        if (len === 0) {
            return false;
        }
        var n = args[1] || 0;
        var k;
        if (n >= 0) {
            k = n;
        }
        else {
            k = len + n;
            if (k < 0) {
                k = 0;
            }
        }
        var currentElement;
        while (k < len) {
            currentElement = O[k];
            if (searchElement === currentElement || (searchElement !== searchElement && currentElement !== currentElement)) {
                return true;
            }
            k++;
        }
        return false;
    };
}

var Container = /** @class */ (function () {
    function Container() {
    }
    /**
     * Register the database.
     */
    Container.register = function (database) {
        this.database = database;
    };
    return Container;
}());

var install = (function (database, options) {
    if (options === void 0) { options = {}; }
    var namespace = options.namespace || 'entities';
    return function (store) {
        Container.register(database);
        database.start(store, namespace);
    };
});

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

/**
 * Check if the given array or object is empty.
 */
function isEmpty(data) {
    if (Array.isArray(data)) {
        return data.length === 0;
    }
    return Object.keys(data).length === 0;
}
/**
 * Iterates over own enumerable string keyed properties of an object and
 * invokes `iteratee` for each property.
 */
function forOwn(object, iteratee) {
    Object.keys(object).forEach(function (key) { return iteratee(object[key], key, object); });
}
/**
 * Create an array from the object.
 */
function map(object, iteratee) {
    return Object.keys(object).map(function (key) {
        return iteratee(object[key], key, object);
    });
}
/**
 * Creates an object with the same keys as object and values generated by
 * running each own enumerable string keyed property of object thru
 * iteratee. The iteratee is invoked with three arguments:
 * (value, key, object).
 */
function mapValues(object, iteratee) {
    var newObject = Object.assign({}, object);
    return Object.keys(object).reduce(function (records, key) {
        records[key] = iteratee(object[key], key, object);
        return records;
    }, newObject);
}
/**
 * Creates an object composed of the object properties predicate returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 */
function pickBy(object, predicate) {
    return Object.keys(object).reduce(function (records, key) {
        var value = object[key];
        if (predicate(value, key)) {
            records[key] = value;
        }
        return records;
    }, {});
}
/**
 * Creates an array of elements, sorted in specified order by the results
 * of running each element in a collection thru each iteratee.
 */
function orderBy(collection, keys, directions) {
    var index = -1;
    var result = collection.map(function (value) {
        var criteria = keys.map(function (key) { return value[key]; });
        return { criteria: criteria, index: ++index, value: value };
    });
    return baseSortBy(result, function (object, other) {
        return compareMultiple(object, other, directions);
    });
}
/**
 * Creates an object composed of keys generated from the results of running
 * each element of collection thru iteratee.
 */
function groupBy(collection, iteratee) {
    return collection.reduce(function (records, record) {
        var key = iteratee(record);
        if (records[key] === undefined) {
            records[key] = [];
        }
        records[key].push(record);
        return records;
    }, {});
}
/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their
 * corresponding values.
 */
function baseSortBy(array, comparer) {
    var length = array.length;
    array.sort(comparer);
    while (length--) {
        array[length] = array[length].value;
    }
    return array;
}
/**
 * Used by `orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order.
 * Otherwise, specify an order of "desc" for descending or "asc" for
 * ascending sort order of corresponding values.
 */
function compareMultiple(object, other, orders) {
    var objCriteria = object.criteria;
    var othCriteria = other.criteria;
    var length = objCriteria.length;
    var ordersLength = orders.length;
    var index = -1;
    while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
            if (index >= ordersLength) {
                return result;
            }
            var order = orders[index];
            return result * (order === 'desc' ? -1 : 1);
        }
    }
    return object.index - other.index;
}
/**
 * Compares values to sort them in ascending order.
 */
function compareAscending(value, other) {
    if (value !== other) {
        if (value > other) {
            return 1;
        }
        if (value < other) {
            return -1;
        }
    }
    return 0;
}
var Utils = {
    isEmpty: isEmpty,
    forOwn: forOwn,
    groupBy: groupBy,
    map: map,
    mapValues: mapValues,
    orderBy: orderBy,
    pickBy: pickBy
};

var Attribute = /** @class */ (function () {
    /**
     * Create a new attribute instance.
     */
    function Attribute(model) {
        this.model = model;
    }
    return Attribute;
}());

var Type = /** @class */ (function (_super) {
    __extends(Type, _super);
    /**
     * Create a new type instance.
     */
    function Type(model, mutator) {
        var _this = _super.call(this, model) /* istanbul ignore next */ || this;
        _this.mutator = mutator;
        return _this;
    }
    /**
     * Mutate the given value by mutator.
     */
    Type.prototype.mutate = function (value, key) {
        var mutator = this.mutator || this.model.mutators()[key];
        return mutator ? mutator(value) : value;
    };
    return Type;
}(Attribute));

var Attr = /** @class */ (function (_super) {
    __extends(Attr, _super);
    /**
     * Create a new attr instance.
     */
    function Attr(model, value, mutator) {
        var _this = _super.call(this, model, mutator) /* istanbul ignore next */ || this;
        _this.value = value;
        return _this;
    }
    /**
     * Transform given data to the appropriate value. This method will be called
     * during data normalization to fix field that has an incorrect value,
     * or add a missing field with the appropriate default value.
     */
    Attr.prototype.fill = function (value) {
        return value !== undefined ? value : this.value;
    };
    /**
     * Make value to be set to model property. This method is used when
     * instantiating a model or creating a plain object from a model.
     */
    Attr.prototype.make = function (value, _parent, key, _plain) {
        return this.mutate(this.fill(value), key);
    };
    return Attr;
}(Type));

var Increment = /** @class */ (function (_super) {
    __extends(Increment, _super);
    /**
     * Create a new increment instance.
     */
    function Increment(model) {
        var _this = _super.call(this, model) /* istanbul ignore next */ || this;
        /**
         * The initial count to start incrementing.
         */
        _this.value = 1;
        return _this;
    }
    /**
     * Transform given data to the appropriate value. This method will be called
     * during data normalization to fix field that has an incorrect value,
     * or add a missing field with the appropriate default value.
     */
    Increment.prototype.fill = function (value) {
        return value;
    };
    /**
     * Make value to be set to model property. This method is used when
     * instantiating a model or creating a plain object from a model.
     */
    Increment.prototype.make = function (value, _parent, _key, _plain) {
        return typeof value === 'number' ? value : null;
    };
    return Increment;
}(Type));

var String$1 = /** @class */ (function (_super) {
    __extends(String, _super);
    /**
     * Create a new string instance.
     */
    function String(model, value, mutator) {
        var _this = _super.call(this, model, mutator) /* istanbul ignore next */ || this;
        _this.value = value;
        return _this;
    }
    /**
     * Transform given data to the appropriate value. This method will be called
     * during data normalization to fix field that has an incorrect value,
     * or add a missing field with the appropriate default value.
     */
    String.prototype.fill = function (value) {
        if (value === undefined) {
            return this.value;
        }
        if (typeof value === 'string') {
            return value;
        }
        return value + '';
    };
    /**
     * Make value to be set to model property. This method is used when
     * instantiating a model or creating a plain object from a model.
     */
    String.prototype.make = function (value, _parent, key, _plain) {
        return this.mutate(this.fill(value), key);
    };
    return String;
}(Type));

var Number = /** @class */ (function (_super) {
    __extends(Number, _super);
    /**
     * Create a new number instance.
     */
    function Number(model, value, mutator) {
        var _this = _super.call(this, model, mutator) /* istanbul ignore next */ || this;
        _this.value = value;
        return _this;
    }
    /**
     * Transform given data to the appropriate value. This method will be called
     * during data normalization to fix field that has an incorrect value,
     * or add a missing field with the appropriate default value.
     */
    Number.prototype.fill = function (value) {
        if (value === undefined) {
            return this.value;
        }
        if (typeof value === 'number') {
            return value;
        }
        if (typeof value === 'string') {
            return parseFloat(value);
        }
        if (typeof value === 'boolean') {
            return value ? 1 : 0;
        }
        return 0;
    };
    /**
     * Make value to be set to model property. This method is used when
     * instantiating a model or creating a plain object from a model.
     */
    Number.prototype.make = function (value, _parent, key, _plain) {
        return this.mutate(this.fill(value), key);
    };
    return Number;
}(Type));

var Boolean = /** @class */ (function (_super) {
    __extends(Boolean, _super);
    /**
     * Create a new number instance.
     */
    function Boolean(model, value, mutator) {
        var _this = _super.call(this, model, mutator) /* istanbul ignore next */ || this;
        _this.value = value;
        return _this;
    }
    /**
     * Transform given data to the appropriate value. This method will be called
     * during data normalization to fix field that has an incorrect value,
     * or add a missing field with the appropriate default value.
     */
    Boolean.prototype.fill = function (value) {
        if (value === undefined) {
            return this.value;
        }
        if (typeof value === 'boolean') {
            return value;
        }
        if (typeof value === 'string') {
            if (value.length === 0) {
                return false;
            }
            var int = parseInt(value, 0);
            return isNaN(int) ? true : !!int;
        }
        if (typeof value === 'number') {
            return !!value;
        }
        return false;
    };
    /**
     * Make value to be set to model property. This method is used when
     * instantiating a model or creating a plain object from a model.
     */
    Boolean.prototype.make = function (value, _parent, key, _plain) {
        return this.mutate(this.fill(value), key);
    };
    return Boolean;
}(Type));

var Relation = /** @class */ (function (_super) {
    __extends(Relation, _super);
    function Relation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Fill given value for the single item relationship such as
     * `hasOne` and `belongsTo`.
     */
    Relation.prototype.fillOne = function (value) {
        if (value === undefined) {
            return null;
        }
        if (typeof value === 'object') {
            return null;
        }
        return value;
    };
    /**
     * Fill given value for the multi-item relationship such as
     * `hasMany` and `belongsToMany`.
     */
    Relation.prototype.fillMany = function (value) {
        return Array.isArray(value) ? value : [];
    };
    /**
     * Get relation query instance with constraint attached.
     */
    Relation.prototype.getRelation = function (query, name) {
        var relation = query.newPlainQuery(name);
        this.addEagerConstraint(query, relation);
        return relation;
    };
    /**
     * Get specified keys from the given collection.
     */
    Relation.prototype.getKeys = function (collection, key) {
        return collection.map(function (item) { return item[key]; });
    };
    /**
     * Add eager load constraint to the query.
     */
    Relation.prototype.addEagerConstraint = function (query, relation) {
        for (var name_1 in query.load) {
            query.load[name_1].forEach(function (constraint) { constraint(relation); });
        }
    };
    /**
     * Create a new indexed map for the single relation by specified key.
     */
    Relation.prototype.mapSingleRelations = function (collection, key) {
        return collection.reduce(function (records, record) {
            var id = record[key];
            records[id] = record;
            return records;
        }, {});
    };
    /**
     * Create a new indexed map for the many relation by specified key.
     */
    Relation.prototype.mapManyRelations = function (collection, key) {
        return collection.reduce(function (records, record) {
            var id = record[key];
            if (!records[id]) {
                records[id] = [];
            }
            records[id].push(record);
            return records;
        }, {});
    };
    /**
     * Check if the given value is a single relation, which is the Object.
     */
    Relation.prototype.isOneRelation = function (record) {
        if (!Array.isArray(record) && record !== null && typeof record === 'object') {
            return true;
        }
        return false;
    };
    return Relation;
}(Attribute));

var HasOne = /** @class */ (function (_super) {
    __extends(HasOne, _super);
    /**
     * Create a new has one instance.
     */
    function HasOne(model, related, foreignKey, localKey) {
        var _this = _super.call(this, model) /* istanbul ignore next */ || this;
        _this.related = _this.model.relation(related);
        _this.foreignKey = foreignKey;
        _this.localKey = localKey;
        return _this;
    }
    /**
     * Define the normalizr schema for the relationship.
     */
    HasOne.prototype.define = function (schema) {
        return schema.one(this.related);
    };
    /**
     * Attach the relational key to the related data. For example,
     * when User has one Phone, it will attach value to the
     * `user_id` field of Phone record.
     */
    HasOne.prototype.attach = function (key, record, data) {
        // Get related record.
        var related = data[this.related.entity];
        // If there's no related record, there's nothing we can do so return here.
        if (!related || !related[key]) {
            return;
        }
        // If there is a related record, check if the related record already has
        // proper foreign key value. If it has, that means the user has provided
        // the foreign key themselves so leave it alone and do nothing.
        if (related[key][this.foreignKey] !== undefined) {
            return;
        }
        // Check if the record has local key set. If not, set the local key to be
        // the id value. This happens if the user defines the custom local key
        // and didn't include it in the data being normalized.
        if (!record[this.localKey]) {
            record[this.localKey] = record.$id;
        }
        // Finally, set the foreign key of the related record to be the local
        // key of this record.
        related[key][this.foreignKey] = record[this.localKey];
    };
    /**
     * Validate the given value to be a valid value for the relationship.
     */
    HasOne.prototype.fill = function (value) {
        return this.fillOne(value);
    };
    /**
     * Make value to be set to model property. This method is used when
     * instantiating a model or creating a plain object from a model.
     */
    HasOne.prototype.make = function (value, _parent, _key, plain) {
        if (plain === void 0) { plain = false; }
        if (!this.isOneRelation(value)) {
            return null;
        }
        return this.related.make(value, plain);
    };
    /**
     * Load the has one relationship for the collection.
     */
    HasOne.prototype.load = function (query, collection, key) {
        var _this = this;
        var relation = this.getRelation(query, this.related.entity);
        relation.where(this.foreignKey, this.getKeys(collection, this.localKey));
        var relations = this.mapSingleRelations(relation.get(), this.foreignKey);
        collection.forEach(function (item) {
            var related = relations[item[_this.localKey]];
            item[key] = related || null;
        });
    };
    return HasOne;
}(Relation));

var BelongsTo = /** @class */ (function (_super) {
    __extends(BelongsTo, _super);
    /**
     * Create a new belongs to instance.
     */
    function BelongsTo(model, parent, foreignKey, ownerKey) {
        var _this = _super.call(this, model) /* istanbul ignore next */ || this;
        _this.parent = _this.model.relation(parent);
        _this.foreignKey = foreignKey;
        _this.ownerKey = ownerKey;
        return _this;
    }
    /**
     * Define the normalizr schema for the relationship.
     */
    BelongsTo.prototype.define = function (schema) {
        return schema.one(this.parent);
    };
    /**
     * Attach the relational key to the given data. For example,
     * when Post belongs to User, it will attach value to the
     * `user_id` field of Post record.
     */
    BelongsTo.prototype.attach = function (key, record, _data) {
        // See if the record has the foreign key, if yes, it means the user has
        // provided the key explicitly so do nothing and return.
        if (record[this.foreignKey] !== undefined) {
            return;
        }
        // If there is no foreign key, let's set it here.
        record[this.foreignKey] = key;
    };
    /**
     * Validate the given value to be a valid value for the relationship.
     */
    BelongsTo.prototype.fill = function (value) {
        return this.fillOne(value);
    };
    /**
     * Make value to be set to model property. This method is used when
     * instantiating a model or creating a plain object from a model.
     */
    BelongsTo.prototype.make = function (value, _parent, _key, plain) {
        if (plain === void 0) { plain = false; }
        if (!this.isOneRelation(value)) {
            return null;
        }
        return this.parent.make(value, plain);
    };
    /**
     * Load the belongs to relationship for the collection.
     */
    BelongsTo.prototype.load = function (query, collection, key) {
        var _this = this;
        var relatedQuery = this.getRelation(query, this.parent.entity);
        query.where(this.ownerKey, this.getKeys(collection, this.foreignKey));
        var relations = this.mapSingleRelations(relatedQuery.get(), this.ownerKey);
        collection.forEach(function (item) {
            var related = relations[item[_this.foreignKey]];
            item[key] = related || null;
        });
    };
    return BelongsTo;
}(Relation));

var HasMany = /** @class */ (function (_super) {
    __extends(HasMany, _super);
    /**
     * Create a new has many instance.
     */
    function HasMany(model, related, foreignKey, localKey) {
        var _this = _super.call(this, model) /* istanbul ignore next */ || this;
        _this.related = _this.model.relation(related);
        _this.foreignKey = foreignKey;
        _this.localKey = localKey;
        return _this;
    }
    /**
     * Define the normalizr schema for the relationship.
     */
    HasMany.prototype.define = function (schema) {
        return schema.many(this.related);
    };
    /**
     * Attach the relational key to the given data.
     */
    HasMany.prototype.attach = function (key, record, data) {
        var _this = this;
        if (!Array.isArray(key)) {
            return;
        }
        key.forEach(function (index) {
            var related = data[_this.related.entity];
            if (!related || !related[index] || related[index][_this.foreignKey] !== undefined) {
                return;
            }
            related[index][_this.foreignKey] = record.$id;
        });
    };
    /**
     * Validate the given value to be a valid value for the relationship.
     */
    HasMany.prototype.fill = function (value) {
        return this.fillMany(value);
    };
    /**
     * Make value to be set to model property. This method is used when
     * instantiating a model or creating a plain object from a model.
     */
    HasMany.prototype.make = function (value, _parent, _key, plain) {
        var _this = this;
        if (plain === void 0) { plain = false; }
        if (value === null) {
            return [];
        }
        if (value === undefined) {
            return [];
        }
        if (!Array.isArray(value)) {
            return [];
        }
        if (value.length === 0) {
            return [];
        }
        return value.filter(function (record) {
            return record && typeof record === 'object';
        }).map(function (record) {
            return _this.related.make(record, plain);
        });
    };
    /**
     * Load the has many relationship for the collection.
     */
    HasMany.prototype.load = function (query, collection, key) {
        var _this = this;
        var relatedQuery = this.getRelation(query, this.related.entity);
        relatedQuery.where(this.foreignKey, this.getKeys(collection, this.localKey));
        var relations = this.mapManyRelations(relatedQuery.get(), this.foreignKey);
        collection.forEach(function (item) {
            var related = relations[item[_this.localKey]];
            item[key] = related || [];
        });
    };
    return HasMany;
}(Relation));

var HasManyBy = /** @class */ (function (_super) {
    __extends(HasManyBy, _super);
    /**
     * Create a new has many by instance.
     */
    function HasManyBy(model, parent, foreignKey, ownerKey) {
        var _this = _super.call(this, model) /* istanbul ignore next */ || this;
        _this.parent = _this.model.relation(parent);
        _this.foreignKey = foreignKey;
        _this.ownerKey = ownerKey;
        return _this;
    }
    /**
     * Define the normalizr schema for the relationship.
     */
    HasManyBy.prototype.define = function (schema) {
        return schema.many(this.parent);
    };
    /**
     * Attach the relational key to the given data.
     */
    HasManyBy.prototype.attach = function (key, record, _data) {
        if (key.length === 0) {
            return;
        }
        if (record[this.foreignKey] !== undefined) {
            return;
        }
        record[this.foreignKey] = key;
    };
    /**
     * Validate the given value to be a valid value for the relationship.
     */
    HasManyBy.prototype.fill = function (value) {
        return this.fillMany(value);
    };
    /**
     * Make value to be set to model property. This method is used when
     * instantiating a model or creating a plain object from a model.
     */
    HasManyBy.prototype.make = function (value, _parent, _key, plain) {
        var _this = this;
        if (plain === void 0) { plain = false; }
        if (value === null) {
            return [];
        }
        if (value === undefined) {
            return [];
        }
        if (!Array.isArray(value)) {
            return [];
        }
        if (value.length === 0) {
            return [];
        }
        return value.filter(function (record) {
            return record && typeof record === 'object';
        }).map(function (record) {
            return _this.parent.make(record, plain);
        });
    };
    /**
     * Load the has many by relationship for the collection.
     */
    HasManyBy.prototype.load = function (query, collection, key) {
        var _this = this;
        var relatedQuery = this.getRelation(query, this.parent.entity);
        this.addConstraintForHasManyBy(relatedQuery, collection);
        var relations = this.mapSingleRelations(relatedQuery.get(), this.ownerKey);
        collection.forEach(function (item) {
            var related = _this.getRelatedRecords(relations, item[_this.foreignKey]);
            item[key] = related;
        });
    };
    /**
     * Set the constraints for an eager load of the relation.
     */
    HasManyBy.prototype.addConstraintForHasManyBy = function (query, collection) {
        var _this = this;
        var keys = collection.reduce(function (keys, item) {
            return keys.concat(item[_this.foreignKey]);
        }, []);
        query.where(this.ownerKey, keys);
    };
    /**
     * Get related records.
     */
    HasManyBy.prototype.getRelatedRecords = function (records, keys) {
        return keys.reduce(function (items, id) {
            var related = records[id];
            related && items.push(related);
            return items;
        }, []);
    };
    return HasManyBy;
}(Relation));

var HasManyThrough = /** @class */ (function (_super) {
    __extends(HasManyThrough, _super);
    /**
     * Create a new has many through instance.
     */
    function HasManyThrough(model, related, through, firstKey, secondKey, localKey, secondLocalKey) {
        var _this = _super.call(this, model) /* istanbul ignore next */ || this;
        _this.related = _this.model.relation(related);
        _this.through = _this.model.relation(through);
        _this.firstKey = firstKey;
        _this.secondKey = secondKey;
        _this.localKey = localKey;
        _this.secondLocalKey = secondLocalKey;
        return _this;
    }
    /**
     * Define the normalizr schema for the relationship.
     */
    HasManyThrough.prototype.define = function (schema) {
        return schema.many(this.related);
    };
    /**
     * Attach the relational key to the given data. Since has many through
     * relationship doesn't have any foreign key, it would do nothing.
     */
    HasManyThrough.prototype.attach = function (_key, _record, _data) {
        return;
    };
    /**
     * Validate the given value to be a valid value for the relationship.
     */
    HasManyThrough.prototype.fill = function (value) {
        return this.fillMany(value);
    };
    /**
     * Make value to be set to model property. This method is used when
     * instantiating a model or creating a plain object from a model.
     */
    HasManyThrough.prototype.make = function (value, _parent, _key, plain) {
        var _this = this;
        if (plain === void 0) { plain = false; }
        if (value === null) {
            return [];
        }
        if (value === undefined) {
            return [];
        }
        if (!Array.isArray(value)) {
            return [];
        }
        if (value.length === 0) {
            return [];
        }
        return value.filter(function (record) {
            return record && typeof record === 'object';
        }).map(function (record) {
            return _this.related.make(record, plain);
        });
    };
    /**
     * Load the has many through relationship for the collection.
     */
    HasManyThrough.prototype.load = function (query, collection, key) {
        var _this = this;
        var relatedQuery = this.getRelation(query, this.related.entity);
        var throughQuery = query.newPlainQuery(this.through.entity);
        this.addEagerConstraintForThrough(throughQuery, collection);
        var throughs = throughQuery.get();
        this.addEagerConstraintForRelated(relatedQuery, throughs);
        var relateds = this.mapThroughRelations(throughs, relatedQuery);
        collection.forEach(function (item) {
            var related = relateds[item[_this.localKey]];
            item[key] = related;
        });
    };
    /**
     * Set the constraints for the through relation.
     */
    HasManyThrough.prototype.addEagerConstraintForThrough = function (query, collection) {
        query.where(this.firstKey, this.getKeys(collection, this.localKey));
    };
    /**
     * Set the constraints for the related relation.
     */
    HasManyThrough.prototype.addEagerConstraintForRelated = function (query, collection) {
        query.where(this.secondKey, this.getKeys(collection, this.secondLocalKey));
    };
    /**
     * Create a new indexed map for the through relation.
     */
    HasManyThrough.prototype.mapThroughRelations = function (throughs, relatedQuery) {
        var _this = this;
        var relateds = this.mapManyRelations(relatedQuery.get(), this.secondKey);
        return throughs.reduce(function (records, record) {
            var id = record[_this.firstKey];
            if (!records[id]) {
                records[id] = [];
            }
            var related = relateds[record[_this.secondLocalKey]];
            if (related) {
                records[id] = records[id].concat(related);
            }
            return records;
        }, {});
    };
    return HasManyThrough;
}(Relation));

var BelongsToMany = /** @class */ (function (_super) {
    __extends(BelongsToMany, _super);
    /**
     * Create a new belongs to instance.
     */
    function BelongsToMany(model, related, pivot, foreignPivotKey, relatedPivotKey, parentKey, relatedKey) {
        var _this = _super.call(this, model) /* istanbul ignore next */ || this;
        _this.related = _this.model.relation(related);
        _this.pivot = _this.model.relation(pivot);
        _this.foreignPivotKey = foreignPivotKey;
        _this.relatedPivotKey = relatedPivotKey;
        _this.parentKey = parentKey;
        _this.relatedKey = relatedKey;
        return _this;
    }
    /**
     * Define the normalizr schema for the relationship.
     */
    BelongsToMany.prototype.define = function (schema) {
        return schema.many(this.related);
    };
    /**
     * Attach the relational key to the given data. Since belongs to many
     * relationship doesn't have any foreign key, it would do nothing.
     */
    BelongsToMany.prototype.attach = function (_key, _record, _data) {
        return;
    };
    /**
     * Validate the given value to be a valid value for the relationship.
     */
    BelongsToMany.prototype.fill = function (value) {
        return this.fillMany(value);
    };
    /**
     * Make value to be set to model property. This method is used when
     * instantiating a model or creating a plain object from a model.
     */
    BelongsToMany.prototype.make = function (value, _parent, _key, plain) {
        var _this = this;
        if (plain === void 0) { plain = false; }
        if (value === null) {
            return [];
        }
        if (value === undefined) {
            return [];
        }
        if (!Array.isArray(value)) {
            return [];
        }
        if (value.length === 0) {
            return [];
        }
        return value.filter(function (record) {
            return record && typeof record === 'object';
        }).map(function (record) {
            return _this.related.make(record, plain);
        });
    };
    /**
     * Load the belongs to relationship for the record.
     */
    BelongsToMany.prototype.load = function (query, collection, key) {
        var _this = this;
        var relatedQuery = this.getRelation(query, this.related.entity);
        var pivotQuery = query.newPlainQuery(this.pivot.entity);
        this.addEagerConstraintForPivot(pivotQuery, collection);
        var pivots = pivotQuery.get();
        this.addEagerConstraintForRelated(relatedQuery, pivots);
        var relateds = this.mapPivotRelations(pivots, relatedQuery);
        collection.forEach(function (item) {
            var related = relateds[item[_this.parentKey]];
            item[key] = related;
        });
    };
    /**
     * Set the constraints for the pivot relation.
     */
    BelongsToMany.prototype.addEagerConstraintForPivot = function (query, collection) {
        query.where(this.foreignPivotKey, this.getKeys(collection, this.parentKey));
    };
    /**
     * Set the constraints for the related relation.
     */
    BelongsToMany.prototype.addEagerConstraintForRelated = function (query, collection) {
        query.where(this.relatedPivotKey, this.getKeys(collection, this.relatedKey));
    };
    /**
     * Create a new indexed map for the pivot relation.
     */
    BelongsToMany.prototype.mapPivotRelations = function (pivots, relatedQuery) {
        var _this = this;
        var relateds = this.mapManyRelations(relatedQuery.get(), this.relatedKey);
        return pivots.reduce(function (records, record) {
            var id = record[_this.foreignPivotKey];
            if (!records[id]) {
                records[id] = [];
            }
            var related = relateds[record[_this.relatedPivotKey]];
            if (related) {
                records[id] = records[id].concat(related);
            }
            return records;
        }, {});
    };
    /**
     * Create pivot records for the given records if needed.
     */
    BelongsToMany.prototype.createPivots = function (parent, data, key) {
        var _this = this;
        if (this.pivot.primaryKey instanceof Array === false)
            return data;
        Utils.forOwn(data[parent.entity], function (record) {
            var related = record[key];
            if (related === undefined || related.length === 0) {
                return;
            }
            _this.createPivotRecord(data, record, related);
        });
        return data;
    };
    /**
     * Create a pivot record.
     */
    BelongsToMany.prototype.createPivotRecord = function (data, record, related) {
        var _this = this;
        related.forEach(function (id) {
            var _a, _b;
            var pivotKey = record[_this.parentKey] + "_" + id;
            data[_this.pivot.entity] = __assign({}, data[_this.pivot.entity], (_a = {}, _a[pivotKey] = (_b = {
                    $id: pivotKey
                },
                _b[_this.foreignPivotKey] = record[_this.parentKey],
                _b[_this.relatedPivotKey] = id,
                _b), _a));
        });
    };
    return BelongsToMany;
}(Relation));

var MorphTo = /** @class */ (function (_super) {
    __extends(MorphTo, _super);
    /**
     * Create a new morph to instance.
     */
    function MorphTo(model, id, type) {
        var _this = _super.call(this, model) /* istanbul ignore next */ || this;
        _this.id = id;
        _this.type = type;
        return _this;
    }
    /**
     * Define the normalizr schema for the relationship.
     */
    MorphTo.prototype.define = function (schema) {
        var _this = this;
        return schema.union(function (_value, parentValue) { return parentValue[_this.type]; });
    };
    /**
     * Attach the relational key to the given record. Since morph to
     * relationship doesn't have any foreign key, it would do nothing.
     */
    MorphTo.prototype.attach = function (_key, _record, _data) {
        return;
    };
    /**
     * Validate the given value to be a valid value for the relationship.
     */
    MorphTo.prototype.fill = function (value) {
        return this.fillOne(value);
    };
    /**
     * Make value to be set to model property. This method is used when
     * instantiating a model or creating a plain object from a model.
     */
    MorphTo.prototype.make = function (value, parent, _key, plain) {
        if (plain === void 0) { plain = false; }
        if (!this.isOneRelation(value)) {
            return null;
        }
        var related = parent[this.type];
        var model = this.model.relation(related);
        return model ? model.make(value, plain) : null;
    };
    /**
     * Load the morph to relationship for the collection.
     */
    MorphTo.prototype.load = function (query, collection, key) {
        var _this = this;
        var types = this.getTypes(collection);
        var relateds = types.reduce(function (relateds, type) {
            var relatedQuery = _this.getRelation(query, type);
            relateds[type] = _this.mapSingleRelations(relatedQuery.get(), '$id');
            return relateds;
        }, {});
        collection.forEach(function (item) {
            var id = item[_this.id];
            var type = item[_this.type];
            var related = relateds[type][id];
            item[key] = related || null;
        });
    };
    /**
     * Get all types from the collection.
     */
    MorphTo.prototype.getTypes = function (collection) {
        var _this = this;
        return collection.reduce(function (types, item) {
            var type = item[_this.type];
            !types.includes(type) && types.push(type);
            return types;
        }, []);
    };
    return MorphTo;
}(Relation));

var MorphOne = /** @class */ (function (_super) {
    __extends(MorphOne, _super);
    /**
     * Create a new belongs to instance.
     */
    function MorphOne(model, related, id, type, localKey) {
        var _this = _super.call(this, model) /* istanbul ignore next */ || this;
        _this.related = _this.model.relation(related);
        _this.id = id;
        _this.type = type;
        _this.localKey = localKey;
        return _this;
    }
    /**
     * Define the normalizr schema for the relationship.
     */
    MorphOne.prototype.define = function (schema) {
        return schema.one(this.related);
    };
    /**
     * Attach the relational key to the given data.
     */
    MorphOne.prototype.attach = function (key, record, data) {
        var relatedItem = data[this.related.entity] && data[this.related.entity][key];
        if (!relatedItem) {
            return;
        }
        relatedItem[this.id] = relatedItem[this.id] || record.$id;
        relatedItem[this.type] = relatedItem[this.type] || this.model.entity;
    };
    /**
     * Validate the given value to be a valid value for the relationship.
     */
    MorphOne.prototype.fill = function (value) {
        return this.fillOne(value);
    };
    /**
     * Make value to be set to model property. This method is used when
     * instantiating a model or creating a plain object from a model.
     */
    MorphOne.prototype.make = function (value, _parent, _key, plain) {
        if (plain === void 0) { plain = false; }
        if (!this.isOneRelation(value)) {
            return null;
        }
        return this.related.make(value, plain);
    };
    /**
     * Load the morph many relationship for the record.
     */
    MorphOne.prototype.load = function (query, collection, key) {
        var _this = this;
        var relatedQuery = this.getRelation(query, this.related.entity);
        this.addEagerConstraintForMorphOne(relatedQuery, collection, query.entity);
        var relations = this.mapSingleRelations(relatedQuery.get(), this.id);
        collection.forEach(function (item) {
            var related = relations[item[_this.localKey]];
            item[key] = related || null;
        });
    };
    /**
     * Set the constraints for an eager load of the relation.
     */
    MorphOne.prototype.addEagerConstraintForMorphOne = function (query, collection, type) {
        query.where(this.type, type).where(this.id, this.getKeys(collection, this.localKey));
    };
    return MorphOne;
}(Relation));

var MorphMany = /** @class */ (function (_super) {
    __extends(MorphMany, _super);
    /**
     * Create a new belongs to instance.
     */
    function MorphMany(model, related, id, type, localKey) {
        var _this = _super.call(this, model) /* istanbul ignore next */ || this;
        _this.related = _this.model.relation(related);
        _this.id = id;
        _this.type = type;
        _this.localKey = localKey;
        return _this;
    }
    /**
     * Define the normalizr schema for the relationship.
     */
    MorphMany.prototype.define = function (schema) {
        return schema.many(this.related);
    };
    /**
     * Attach the relational key to the given data.
     */
    MorphMany.prototype.attach = function (key, record, data) {
        var _this = this;
        if (!Array.isArray(key)) {
            return;
        }
        var relatedItems = data[this.related.entity];
        key.forEach(function (id) {
            var relatedItem = relatedItems[id];
            relatedItem[_this.id] = relatedItem[_this.id] || record.$id;
            relatedItem[_this.type] = relatedItem[_this.type] || _this.model.entity;
        });
    };
    /**
     * Validate the given value to be a valid value for the relationship.
     */
    MorphMany.prototype.fill = function (value) {
        return this.fillMany(value);
    };
    /**
     * Make value to be set to model property. This method is used when
     * instantiating a model or creating a plain object from a model.
     */
    MorphMany.prototype.make = function (value, _parent, _key, plain) {
        var _this = this;
        if (plain === void 0) { plain = false; }
        if (value === null) {
            return [];
        }
        if (value === undefined) {
            return [];
        }
        if (!Array.isArray(value)) {
            return [];
        }
        if (value.length === 0) {
            return [];
        }
        return value.filter(function (record) {
            return record && typeof record === 'object';
        }).map(function (record) {
            return _this.related.make(record, plain);
        });
    };
    /**
     * Load the morph many relationship for the record.
     */
    MorphMany.prototype.load = function (query, collection, key) {
        var _this = this;
        var relatedQuery = this.getRelation(query, this.related.entity);
        this.addEagerConstraintForMorphMany(relatedQuery, collection, query.entity);
        var relations = this.mapManyRelations(relatedQuery.get(), this.id);
        collection.forEach(function (item) {
            var related = relations[item[_this.localKey]];
            item[key] = related;
        });
    };
    /**
     * Set the constraints for an eager load of the relation.
     */
    MorphMany.prototype.addEagerConstraintForMorphMany = function (query, collection, type) {
        query.where(this.type, type).where(this.id, this.getKeys(collection, this.localKey));
    };
    return MorphMany;
}(Relation));

var MorphToMany = /** @class */ (function (_super) {
    __extends(MorphToMany, _super);
    /**
     * Create a new belongs to instance.
     */
    function MorphToMany(model, related, pivot, relatedId, id, type, parentKey, relatedKey) {
        var _this = _super.call(this, model) /* istanbul ignore next */ || this;
        _this.related = _this.model.relation(related);
        _this.pivot = _this.model.relation(pivot);
        _this.relatedId = relatedId;
        _this.id = id;
        _this.type = type;
        _this.parentKey = parentKey;
        _this.relatedKey = relatedKey;
        return _this;
    }
    /**
     * Define the normalizr schema for the relationship.
     */
    MorphToMany.prototype.define = function (schema) {
        return schema.many(this.related);
    };
    /**
     * Attach the relational key to the given record. Since morph to many
     * relationship doesn't have any foreign key, it would do nothing.
     */
    MorphToMany.prototype.attach = function (_key, _record, _data) {
        return;
    };
    /**
     * Validate the given value to be a valid value for the relationship.
     */
    MorphToMany.prototype.fill = function (value) {
        return this.fillMany(value);
    };
    /**
     * Make value to be set to model property. This method is used when
     * instantiating a model or creating a plain object from a model.
     */
    MorphToMany.prototype.make = function (value, _parent, _key, plain) {
        var _this = this;
        if (plain === void 0) { plain = false; }
        if (value === null) {
            return [];
        }
        if (value === undefined) {
            return [];
        }
        if (!Array.isArray(value)) {
            return [];
        }
        if (value.length === 0) {
            return [];
        }
        return value.filter(function (record) {
            return record && typeof record === 'object';
        }).map(function (record) {
            return _this.related.make(record, plain);
        });
    };
    /**
     * Load the morph to many relationship for the collection.
     */
    MorphToMany.prototype.load = function (query, collection, key) {
        var _this = this;
        var relatedQuery = this.getRelation(query, this.related.entity);
        var pivotQuery = query.newPlainQuery(this.pivot.entity);
        this.addEagerConstraintForPivot(pivotQuery, collection, query.entity);
        var pivots = pivotQuery.get();
        this.addEagerConstraintForRelated(relatedQuery, pivots);
        var relateds = this.mapPivotRelations(pivots, relatedQuery);
        collection.forEach(function (item) {
            var related = relateds[item[_this.parentKey]];
            item[key] = related;
        });
    };
    /**
     * Set the constraints for the pivot relation.
     */
    MorphToMany.prototype.addEagerConstraintForPivot = function (query, collection, type) {
        query.where(this.type, type).where(this.id, this.getKeys(collection, this.parentKey));
    };
    /**
     * Set the constraints for the related relation.
     */
    MorphToMany.prototype.addEagerConstraintForRelated = function (query, collection) {
        query.where(this.relatedKey, this.getKeys(collection, this.relatedId));
    };
    /**
     * Create a new indexed map for the pivot relation.
     */
    MorphToMany.prototype.mapPivotRelations = function (pivots, relatedQuery) {
        var _this = this;
        var relateds = this.mapManyRelations(relatedQuery.get(), this.relatedKey);
        return pivots.reduce(function (records, record) {
            var id = record[_this.id];
            if (!records[id]) {
                records[id] = [];
            }
            var related = relateds[record[_this.relatedId]];
            if (related) {
                records[id] = records[id].concat(related);
            }
            return records;
        }, {});
    };
    /**
     * Create pivot records for the given records if needed.
     */
    MorphToMany.prototype.createPivots = function (parent, data, key) {
        var _this = this;
        Utils.forOwn(data[parent.entity], function (record) {
            var related = record[key];
            if (!Array.isArray(related) || related.length === 0) {
                return;
            }
            _this.createPivotRecord(parent, data, record, related);
        });
        return data;
    };
    /**
     * Create a pivot record.
     */
    MorphToMany.prototype.createPivotRecord = function (parent, data, record, related) {
        var _this = this;
        related.forEach(function (id) {
            var _a, _b;
            var parentId = record[_this.parentKey];
            var pivotKey = parentId + "_" + id + "_" + parent.entity;
            data[_this.pivot.entity] = __assign({}, data[_this.pivot.entity], (_a = {}, _a[pivotKey] = (_b = {
                    $id: pivotKey
                },
                _b[_this.relatedId] = id,
                _b[_this.id] = parentId,
                _b[_this.type] = parent.entity,
                _b), _a));
        });
    };
    return MorphToMany;
}(Relation));

var MorphedByMany = /** @class */ (function (_super) {
    __extends(MorphedByMany, _super);
    /**
     * Create a new belongs to instance.
     */
    function MorphedByMany(model, related, pivot, relatedId, id, type, parentKey, relatedKey) {
        var _this = _super.call(this, model) /* istanbul ignore next */ || this;
        _this.related = _this.model.relation(related);
        _this.pivot = _this.model.relation(pivot);
        _this.relatedId = relatedId;
        _this.id = id;
        _this.type = type;
        _this.parentKey = parentKey;
        _this.relatedKey = relatedKey;
        return _this;
    }
    /**
     * Define the normalizr schema for the relationship.
     */
    MorphedByMany.prototype.define = function (schema) {
        return schema.many(this.related);
    };
    /**
     * Attach the relational key to the given data. Since morphed by many
     * relationship doesn't have any foreign key, it would do nothing.
     */
    MorphedByMany.prototype.attach = function (_key, _record, _data) {
        return;
    };
    /**
     * Validate the given value to be a valid value for the relationship.
     */
    MorphedByMany.prototype.fill = function (value) {
        return this.fillMany(value);
    };
    /**
     * Make value to be set to model property. This method is used when
     * instantiating a model or creating a plain object from a model.
     */
    MorphedByMany.prototype.make = function (value, _parent, _key, plain) {
        var _this = this;
        if (plain === void 0) { plain = false; }
        if (value === null) {
            return [];
        }
        if (value === undefined) {
            return [];
        }
        if (!Array.isArray(value)) {
            return [];
        }
        if (value.length === 0) {
            return [];
        }
        return value.filter(function (record) {
            return record && typeof record === 'object';
        }).map(function (record) {
            return _this.related.make(record, plain);
        });
    };
    /**
     * Load the morph many relationship for the record.
     */
    MorphedByMany.prototype.load = function (query, collection, key) {
        var _this = this;
        var relatedQuery = this.getRelation(query, this.related.entity);
        var pivotQuery = query.newPlainQuery(this.pivot.entity);
        this.addEagerConstraintForPivot(pivotQuery, collection, this.related.entity);
        var pivots = pivotQuery.get();
        this.addEagerConstraintForRelated(relatedQuery, pivots);
        var relateds = this.mapPivotRelations(pivots, relatedQuery);
        collection.forEach(function (item) {
            var related = relateds[item[_this.parentKey]];
            item[key] = related;
        });
    };
    /**
     * Set the constraints for the pivot relation.
     */
    MorphedByMany.prototype.addEagerConstraintForPivot = function (query, collection, type) {
        query.where(this.type, type).where(this.relatedId, this.getKeys(collection, this.parentKey));
    };
    /**
     * Set the constraints for the related relation.
     */
    MorphedByMany.prototype.addEagerConstraintForRelated = function (query, collection) {
        query.where(this.relatedKey, this.getKeys(collection, this.id));
    };
    /**
     * Create a new indexed map for the pivot relation.
     */
    MorphedByMany.prototype.mapPivotRelations = function (pivots, relatedQuery) {
        var _this = this;
        var relateds = this.mapManyRelations(relatedQuery.get(), this.relatedKey);
        return pivots.reduce(function (records, record) {
            var id = record[_this.relatedId];
            if (!records[id]) {
                records[id] = [];
            }
            var related = relateds[record[_this.id]];
            if (related) {
                records[id] = records[id].concat(related);
            }
            return records;
        }, {});
    };
    /**
     * Create pivot records for the given records if needed.
     */
    MorphedByMany.prototype.createPivots = function (parent, data, key) {
        var _this = this;
        Utils.forOwn(data[parent.entity], function (record) {
            var related = record[key];
            if (related.length === 0) {
                return;
            }
            _this.createPivotRecord(data, record, related);
        });
        return data;
    };
    /**
     * Create a pivot record.
     */
    MorphedByMany.prototype.createPivotRecord = function (data, record, related) {
        var _this = this;
        related.forEach(function (id) {
            var _a, _b;
            var parentId = record[_this.parentKey];
            var pivotKey = id + "_" + parentId + "_" + _this.related.entity;
            data[_this.pivot.entity] = __assign({}, data[_this.pivot.entity], (_a = {}, _a[pivotKey] = (_b = {
                    $id: pivotKey
                },
                _b[_this.relatedId] = parentId,
                _b[_this.id] = id,
                _b[_this.type] = _this.related.entity,
                _b), _a));
        });
    };
    return MorphedByMany;
}(Relation));

var Model = /** @class */ (function () {
    /**
     * Create a model instance.
     */
    function Model(record) {
        this.$fill(record);
    }
    /**
     * The definition of the fields of the model and its relations.
     */
    Model.fields = function () {
        return {};
    };
    /**
     * Get the model schema definition by adding additional default fields.
     */
    Model.getFields = function () {
        if (this.cachedFields) {
            return this.cachedFields;
        }
        this.cachedFields = __assign({ $id: this.attr(undefined) }, this.fields());
        return this.cachedFields;
    };
    /**
     * Create an attr attribute. The given value will be used as a default
     * value for the field.
     */
    Model.attr = function (value, mutator) {
        return new Attr(this, value, mutator);
    };
    /**
     * Create a string attribute.
     */
    Model.string = function (value, mutator) {
        return new String$1(this, value, mutator);
    };
    /**
     * Create a number attribute.
     */
    Model.number = function (value, mutator) {
        return new Number(this, value, mutator);
    };
    /**
     * Create a boolean attribute.
     */
    Model.boolean = function (value, mutator) {
        return new Boolean(this, value, mutator);
    };
    /**
     * Create an increment attribute. The field with this attribute will
     * automatically increment its value when creating a new record.
     */
    Model.increment = function () {
        return new Increment(this);
    };
    /**
     * Create a has one relationship.
     */
    Model.hasOne = function (related, foreignKey, localKey) {
        return new HasOne(this, related, foreignKey, this.localKey(localKey));
    };
    /**
     * Create a belongs to relationship.
     */
    Model.belongsTo = function (parent, foreignKey, ownerKey) {
        return new BelongsTo(this, parent, foreignKey, this.relation(parent).localKey(ownerKey));
    };
    /**
     * Create a has many relationship.
     */
    Model.hasMany = function (related, foreignKey, localKey) {
        return new HasMany(this, related, foreignKey, this.localKey(localKey));
    };
    /**
     * Create a has many by relationship.
     */
    Model.hasManyBy = function (parent, foreignKey, ownerKey) {
        return new HasManyBy(this, parent, foreignKey, this.relation(parent).localKey(ownerKey));
    };
    /**
     * Create a has many through relationship.
     */
    Model.hasManyThrough = function (related, through, firstKey, secondKey, localKey, secondLocalKey) {
        return new HasManyThrough(this, related, through, firstKey, secondKey, this.localKey(localKey), this.relation(through).localKey(secondLocalKey));
    };
    /**
     * The belongs to many relationship.
     */
    Model.belongsToMany = function (related, pivot, foreignPivotKey, relatedPivotKey, parentKey, relatedKey) {
        return new BelongsToMany(this, related, pivot, foreignPivotKey, relatedPivotKey, this.localKey(parentKey), this.relation(related).localKey(relatedKey));
    };
    /**
     * Create a morph to relationship.
     */
    Model.morphTo = function (id, type) {
        return new MorphTo(this, id, type);
    };
    /**
     * Create a morph one relationship.
     */
    Model.morphOne = function (related, id, type, localKey) {
        return new MorphOne(this, related, id, type, this.localKey(localKey));
    };
    /**
     * Create a morph many relationship.
     */
    Model.morphMany = function (related, id, type, localKey) {
        return new MorphMany(this, related, id, type, this.localKey(localKey));
    };
    /**
     * Create a morph to many relationship.
     */
    Model.morphToMany = function (related, pivot, relatedId, id, type, parentKey, relatedKey) {
        return new MorphToMany(this, related, pivot, relatedId, id, type, this.localKey(parentKey), this.relation(related).localKey(relatedKey));
    };
    /**
     * Create a morphed by many relationship.
     */
    Model.morphedByMany = function (related, pivot, relatedId, id, type, parentKey, relatedKey) {
        return new MorphedByMany(this, related, pivot, relatedId, id, type, this.localKey(parentKey), this.relation(related).localKey(relatedKey));
    };
    /**
     * Mutators to mutate matching fields when instantiating the model.
     */
    Model.mutators = function () {
        return {};
    };
    /**
     * Get database out of the container.
     */
    Model.database = function () {
        return Container.database;
    };
    /**
     * Get Vuex Store instance out of connection.
     */
    Model.store = function () {
        return this.database().store;
    };
    /**
     * Get module namespaced path for the model.
     */
    Model.namespace = function (method) {
        return this.database().namespace + "/" + this.entity + "/" + method;
    };
    /**
     * Dispatch an action.
     */
    Model.dispatch = function (method, payload) {
        return this.store().dispatch(this.namespace(method), payload);
    };
    /**
     * Call getetrs.
     */
    Model.getters = function (method) {
        return this.store().getters[this.namespace(method)];
    };
    /**
     * Create records.
     */
    Model.create = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.dispatch('create', payload)];
            });
        });
    };
    /**
     * Insert records.
     */
    Model.insert = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.dispatch('insert', payload)];
            });
        });
    };
    /**
     * Update records.
     */
    Model.update = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.dispatch('update', payload)];
            });
        });
    };
    /**
     * Insert or update records.
     */
    Model.insertOrUpdate = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.dispatch('insertOrUpdate', payload)];
            });
        });
    };
    /**
     * Get all records.
     */
    Model.all = function () {
        return this.getters('all')();
    };
    /**
     * Find a record.
     */
    Model.find = function (id) {
        return this.getters('find')(id);
    };
    /**
     * Get query instance.
     */
    Model.query = function () {
        return this.getters('query')();
    };
    /**
     * Insert or update records.
     */
    Model.delete = function (condition) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.dispatch('delete', condition)];
            });
        });
    };
    /**
     * Get the value of the primary key.
     */
    Model.id = function (record) {
        var key = this.primaryKey;
        if (typeof key === 'string') {
            return record[key];
        }
        return key.map(function (k) { return record[k]; }).join('_');
    };
    /**
     * Get local key to pass to the attributes.
     */
    Model.localKey = function (key) {
        if (key) {
            return key;
        }
        return typeof this.primaryKey === 'string' ? this.primaryKey : 'id';
    };
    /**
     * Get a model from the container.
     */
    Model.relation = function (model) {
        if (typeof model !== 'string') {
            return model;
        }
        return this.database().model(model);
    };
    /**
     * Get the attribute class for the given attribute name.
     */
    Model.getAttributeClass = function (name) {
        switch (name) {
            case 'increment': return Increment;
            default:
                throw Error("The attribute name \"" + name + "\" doesn't exists.");
        }
    };
    /**
     * Get all of the fields that matches the given attribute name.
     */
    Model.getFieldsByAttribute = function (name) {
        var attr = this.getAttributeClass(name);
        var fields = this.fields();
        return Object.keys(fields).reduce(function (newFields, key) {
            var field = fields[key];
            if (field instanceof attr) {
                newFields[key] = field;
            }
            return newFields;
        }, {});
    };
    /**
     * Get all `increment` fields from the schema.
     */
    Model.getIncrementFields = function () {
        return this.getFieldsByAttribute('increment');
    };
    /**
     * Check if fields contains the `increment` field type.
     */
    Model.hasIncrementFields = function () {
        return Object.keys(this.getIncrementFields()).length > 0;
    };
    /**
     * Get all `belongsToMany` fields from the schema.
     */
    Model.pivotFields = function () {
        var fields = [];
        Utils.forOwn(this.fields(), function (field, key) {
            var _a;
            if (field instanceof BelongsToMany || field instanceof MorphToMany || field instanceof MorphedByMany) {
                fields.push((_a = {}, _a[key] = field, _a));
            }
        });
        return fields;
    };
    /**
     * Check if fields contains the `belongsToMany` field type.
     */
    Model.hasPivotFields = function () {
        return this.pivotFields().length > 0;
    };
    /**
     * Create a new model instance.
     */
    Model.make = function (data, plain) {
        if (plain === void 0) { plain = false; }
        if (!plain) {
            return new this(data);
        }
        return this.fill({}, data, true);
    };
    /**
     * Create a new plain model record.
     */
    Model.makePlain = function (data) {
        return this.make(data, true);
    };
    /**
     * Remove any fields not defined in the model schema. This method
     * also fixes any incorrect values as well.
     */
    Model.fix = function (data, keep) {
        if (keep === void 0) { keep = ['$id']; }
        var fields = this.getFields();
        return Object.keys(data).reduce(function (record, key) {
            var value = data[key];
            var field = fields[key];
            if (keep.includes(key)) {
                record[key] = value;
                return record;
            }
            if (!field) {
                return record;
            }
            record[key] = field.fill(value);
            return record;
        }, {});
    };
    /**
     * Fix multiple records.
     */
    Model.fixMany = function (data, keep) {
        var _this = this;
        return Object.keys(data).reduce(function (records, id) {
            records[id] = _this.fix(data[id], keep);
            return records;
        }, {});
    };
    /**
     * Fill any missing fields in the given data with the default
     * value defined in the model schema.
     */
    Model.hydrate = function (data, keep) {
        if (keep === void 0) { keep = ['$id']; }
        var fields = this.getFields();
        var record = Object.keys(fields).reduce(function (record, key) {
            var field = fields[key];
            var value = data[key];
            record[key] = field.fill(value);
            return record;
        }, {});
        return Object.keys(data).reduce(function (record, key) {
            if (keep.includes(key) && data[key] !== undefined) {
                record[key] = data[key];
            }
            return record;
        }, record);
    };
    /**
     * Fill multiple records.
     */
    Model.hydrateMany = function (data, keep) {
        var _this = this;
        return Object.keys(data).reduce(function (records, id) {
            records[id] = _this.hydrate(data[id], keep);
            return records;
        }, {});
    };
    /**
     * Fill the given obejct with the given record. If no record were passed,
     * or if the record has any missing fields, each value of the fields will
     * be filled with its default value defined at model fields definition.
     */
    Model.fill = function (self, record, plain) {
        if (self === void 0) { self = {}; }
        if (record === void 0) { record = {}; }
        if (plain === void 0) { plain = false; }
        var fields = this.getFields();
        return Object.keys(fields).reduce(function (target, key) {
            var field = fields[key];
            var value = record[key];
            target[key] = field.make(value, record, key, plain);
            return target;
        }, self);
    };
    /**
     * Get the static class of this model.
     */
    Model.prototype.$self = function () {
        return this.constructor;
    };
    /**
     * The definition of the fields of the model and its relations.
     */
    Model.prototype.$fields = function () {
        return this.$self().fields();
    };
    /**
     * Get Vuex Store insatnce out of connection.
     */
    Model.prototype.$store = function () {
        return this.$self().store();
    };
    /**
     * Get module namespaced path for the model.
     */
    Model.prototype.$namespace = function (method) {
        return this.$self().namespace(method);
    };
    /**
     * Dispatch an action.
     */
    Model.prototype.$dispatch = function (method, payload) {
        return this.$self().dispatch(method, payload);
    };
    /**
     * Call getetrs.
     */
    Model.prototype.$getters = function (method) {
        return this.$self().getters(method);
    };
    /**
     * Create records.
     */
    Model.prototype.$create = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.$dispatch('create', payload)];
            });
        });
    };
    /**
     * Create records.
     */
    Model.prototype.$insert = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.$dispatch('insert', payload)];
            });
        });
    };
    /**
     * Update records.
     */
    Model.prototype.$update = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (Array.isArray(payload)) {
                    return [2 /*return*/, this.$dispatch('update', payload)];
                }
                if (payload.where !== undefined) {
                    return [2 /*return*/, this.$dispatch('update', payload)];
                }
                if (this.$self().id(payload) === undefined) {
                    return [2 /*return*/, this.$dispatch('update', { where: this.$id, data: payload })];
                }
                return [2 /*return*/, this.$dispatch('update', payload)];
            });
        });
    };
    /**
     * Insert or update records.
     */
    Model.prototype.$insertOrUpdate = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.$dispatch('insertOrUpdate', payload)];
            });
        });
    };
    /**
     * Get all records.
     */
    Model.prototype.$all = function () {
        return this.$getters('all')();
    };
    /**
     * Find a record.
     */
    Model.prototype.$find = function (id) {
        return this.$getters('find')(id);
    };
    /**
     * Get query instance.
     */
    Model.prototype.$query = function () {
        return this.$getters('query')();
    };
    /**
     * Insert or update records.
     */
    Model.prototype.$delete = function (condition) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                condition = condition === undefined ? this.$id : condition;
                return [2 /*return*/, this.$dispatch('delete', condition)];
            });
        });
    };
    /**
     * Fill the model instance with the given record. If no record were passed,
     * or if the record has any missing fields, each value of the fields will
     * be filled with its default value defined at model fields definition.
     */
    Model.prototype.$fill = function (record) {
        this.$self().fill(this, record);
    };
    /**
     * Serialize field values into json.
     */
    Model.prototype.$toJson = function () {
        return this.$self().makePlain(this);
    };
    /**
     * The primary key to be used for the model.
     */
    Model.primaryKey = 'id';
    return Model;
}());

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var ImmutableUtils = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isImmutable = isImmutable;
exports.denormalizeImmutable = denormalizeImmutable;
/**
 * Helpers to enable Immutable compatibility *without* bringing in
 * the 'immutable' package as a dependency.
 */

/**
 * Check if an object is immutable by checking if it has a key specific
 * to the immutable library.
 *
 * @param  {any} object
 * @return {bool}
 */
function isImmutable(object) {
  return !!(object && typeof object.hasOwnProperty === 'function' && (object.hasOwnProperty('__ownerID') || // Immutable.Map
  object._map && object._map.hasOwnProperty('__ownerID') // Immutable.Record
  ));
}

/**
 * Denormalize an immutable entity.
 *
 * @param  {Schema} schema
 * @param  {Immutable.Map|Immutable.Record} input
 * @param  {function} unvisit
 * @param  {function} getDenormalizedEntity
 * @return {Immutable.Map|Immutable.Record}
 */
function denormalizeImmutable(schema, input, unvisit) {
  return Object.keys(schema).reduce(function (object, key) {
    // Immutable maps cast keys to strings on write so we need to ensure
    // we're accessing them using string keys.
    var stringKey = '' + key;

    if (object.has(stringKey)) {
      return object.set(stringKey, unvisit(object.get(stringKey), schema[stringKey]));
    } else {
      return object;
    }
  }, input);
}
});

unwrapExports(ImmutableUtils);
var ImmutableUtils_1 = ImmutableUtils.isImmutable;
var ImmutableUtils_2 = ImmutableUtils.denormalizeImmutable;

var Entity = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var ImmutableUtils$$1 = _interopRequireWildcard(ImmutableUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var getDefaultGetId = function getDefaultGetId(idAttribute) {
  return function (input) {
    return ImmutableUtils$$1.isImmutable(input) ? input.get(idAttribute) : input[idAttribute];
  };
};

var EntitySchema = function () {
  function EntitySchema(key) {
    var definition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, EntitySchema);

    if (!key || typeof key !== 'string') {
      throw new Error('Expected a string key for Entity, but found ' + key + '.');
    }

    var _options$idAttribute = options.idAttribute,
        idAttribute = _options$idAttribute === undefined ? 'id' : _options$idAttribute,
        _options$mergeStrateg = options.mergeStrategy,
        mergeStrategy = _options$mergeStrateg === undefined ? function (entityA, entityB) {
      return _extends({}, entityA, entityB);
    } : _options$mergeStrateg,
        _options$processStrat = options.processStrategy,
        processStrategy = _options$processStrat === undefined ? function (input) {
      return _extends({}, input);
    } : _options$processStrat;


    this._key = key;
    this._getId = typeof idAttribute === 'function' ? idAttribute : getDefaultGetId(idAttribute);
    this._idAttribute = idAttribute;
    this._mergeStrategy = mergeStrategy;
    this._processStrategy = processStrategy;
    this.define(definition);
  }

  _createClass(EntitySchema, [{
    key: 'define',
    value: function define(definition) {
      this.schema = Object.keys(definition).reduce(function (entitySchema, key) {
        var schema = definition[key];
        return _extends({}, entitySchema, _defineProperty({}, key, schema));
      }, this.schema || {});
    }
  }, {
    key: 'getId',
    value: function getId(input, parent, key) {
      return this._getId(input, parent, key);
    }
  }, {
    key: 'merge',
    value: function merge(entityA, entityB) {
      return this._mergeStrategy(entityA, entityB);
    }
  }, {
    key: 'normalize',
    value: function normalize(input, parent, key, visit, addEntity) {
      var _this = this;

      var processedEntity = this._processStrategy(input, parent, key);
      Object.keys(this.schema).forEach(function (key) {
        if (processedEntity.hasOwnProperty(key) && _typeof(processedEntity[key]) === 'object') {
          var schema = _this.schema[key];
          processedEntity[key] = visit(processedEntity[key], processedEntity, key, schema, addEntity);
        }
      });

      addEntity(this, processedEntity, input, parent, key);
      return this.getId(input, parent, key);
    }
  }, {
    key: 'denormalize',
    value: function denormalize(entity, unvisit) {
      var _this2 = this;

      if (ImmutableUtils$$1.isImmutable(entity)) {
        return ImmutableUtils$$1.denormalizeImmutable(this.schema, entity, unvisit);
      }

      Object.keys(this.schema).forEach(function (key) {
        if (entity.hasOwnProperty(key)) {
          var schema = _this2.schema[key];
          entity[key] = unvisit(entity[key], schema);
        }
      });
      return entity;
    }
  }, {
    key: 'key',
    get: function get() {
      return this._key;
    }
  }, {
    key: 'idAttribute',
    get: function get() {
      return this._idAttribute;
    }
  }]);

  return EntitySchema;
}();

exports.default = EntitySchema;
});

unwrapExports(Entity);

var Polymorphic = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PolymorphicSchema = function () {
  function PolymorphicSchema(definition, schemaAttribute) {
    _classCallCheck(this, PolymorphicSchema);

    if (schemaAttribute) {
      this._schemaAttribute = typeof schemaAttribute === 'string' ? function (input) {
        return input[schemaAttribute];
      } : schemaAttribute;
    }
    this.define(definition);
  }

  _createClass(PolymorphicSchema, [{
    key: 'define',
    value: function define(definition) {
      this.schema = definition;
    }
  }, {
    key: 'getSchemaAttribute',
    value: function getSchemaAttribute(input, parent, key) {
      return !this.isSingleSchema && this._schemaAttribute(input, parent, key);
    }
  }, {
    key: 'inferSchema',
    value: function inferSchema(input, parent, key) {
      if (this.isSingleSchema) {
        return this.schema;
      }

      var attr = this.getSchemaAttribute(input, parent, key);
      return this.schema[attr];
    }
  }, {
    key: 'normalizeValue',
    value: function normalizeValue(value, parent, key, visit, addEntity) {
      var schema = this.inferSchema(value, parent, key);
      if (!schema) {
        return value;
      }
      var normalizedValue = visit(value, parent, key, schema, addEntity);
      return this.isSingleSchema || normalizedValue === undefined || normalizedValue === null ? normalizedValue : { id: normalizedValue, schema: this.getSchemaAttribute(value, parent, key) };
    }
  }, {
    key: 'denormalizeValue',
    value: function denormalizeValue(value, unvisit) {
      var schemaKey = (0, ImmutableUtils.isImmutable)(value) ? value.get('schema') : value.schema;
      if (!this.isSingleSchema && !schemaKey) {
        return value;
      }
      var id = (0, ImmutableUtils.isImmutable)(value) ? value.get('id') : value.id;
      var schema = this.isSingleSchema ? this.schema : this.schema[schemaKey];
      return unvisit(id || value, schema);
    }
  }, {
    key: 'isSingleSchema',
    get: function get() {
      return !this._schemaAttribute;
    }
  }]);

  return PolymorphicSchema;
}();

exports.default = PolymorphicSchema;
});

unwrapExports(Polymorphic);

var Union = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _Polymorphic2 = _interopRequireDefault(Polymorphic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnionSchema = function (_PolymorphicSchema) {
  _inherits(UnionSchema, _PolymorphicSchema);

  function UnionSchema(definition, schemaAttribute) {
    _classCallCheck(this, UnionSchema);

    if (!schemaAttribute) {
      throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');
    }
    return _possibleConstructorReturn(this, (UnionSchema.__proto__ || Object.getPrototypeOf(UnionSchema)).call(this, definition, schemaAttribute));
  }

  _createClass(UnionSchema, [{
    key: 'normalize',
    value: function normalize(input, parent, key, visit, addEntity) {
      return this.normalizeValue(input, parent, key, visit, addEntity);
    }
  }, {
    key: 'denormalize',
    value: function denormalize(input, unvisit) {
      return this.denormalizeValue(input, unvisit);
    }
  }]);

  return UnionSchema;
}(_Polymorphic2.default);

exports.default = UnionSchema;
});

unwrapExports(Union);

var Values = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _Polymorphic2 = _interopRequireDefault(Polymorphic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ValuesSchema = function (_PolymorphicSchema) {
  _inherits(ValuesSchema, _PolymorphicSchema);

  function ValuesSchema() {
    _classCallCheck(this, ValuesSchema);

    return _possibleConstructorReturn(this, (ValuesSchema.__proto__ || Object.getPrototypeOf(ValuesSchema)).apply(this, arguments));
  }

  _createClass(ValuesSchema, [{
    key: 'normalize',
    value: function normalize(input, parent, key, visit, addEntity) {
      var _this2 = this;

      return Object.keys(input).reduce(function (output, key, index) {
        var value = input[key];
        return value !== undefined && value !== null ? _extends({}, output, _defineProperty({}, key, _this2.normalizeValue(value, input, key, visit, addEntity))) : output;
      }, {});
    }
  }, {
    key: 'denormalize',
    value: function denormalize(input, unvisit) {
      var _this3 = this;

      return Object.keys(input).reduce(function (output, key) {
        var entityOrId = input[key];
        return _extends({}, output, _defineProperty({}, key, _this3.denormalizeValue(entityOrId, unvisit)));
      }, {});
    }
  }]);

  return ValuesSchema;
}(_Polymorphic2.default);

exports.default = ValuesSchema;
});

unwrapExports(Values);

var _Array = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.denormalize = exports.normalize = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _Polymorphic2 = _interopRequireDefault(Polymorphic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var validateSchema = function validateSchema(definition) {
  var isArray = Array.isArray(definition);
  if (isArray && definition.length > 1) {
    throw new Error('Expected schema definition to be a single schema, but found ' + definition.length + '.');
  }

  return definition[0];
};

var getValues = function getValues(input) {
  return Array.isArray(input) ? input : Object.keys(input).map(function (key) {
    return input[key];
  });
};

var normalize = exports.normalize = function normalize(schema, input, parent, key, visit, addEntity) {
  schema = validateSchema(schema);

  var values = getValues(input);

  // Special case: Arrays pass *their* parent on to their children, since there
  // is not any special information that can be gathered from themselves directly
  return values.map(function (value, index) {
    return visit(value, parent, key, schema, addEntity);
  });
};

var denormalize = exports.denormalize = function denormalize(schema, input, unvisit) {
  schema = validateSchema(schema);
  return input && input.map ? input.map(function (entityOrId) {
    return unvisit(entityOrId, schema);
  }) : input;
};

var ArraySchema = function (_PolymorphicSchema) {
  _inherits(ArraySchema, _PolymorphicSchema);

  function ArraySchema() {
    _classCallCheck(this, ArraySchema);

    return _possibleConstructorReturn(this, (ArraySchema.__proto__ || Object.getPrototypeOf(ArraySchema)).apply(this, arguments));
  }

  _createClass(ArraySchema, [{
    key: 'normalize',
    value: function normalize(input, parent, key, visit, addEntity) {
      var _this2 = this;

      var values = getValues(input);

      return values.map(function (value, index) {
        return _this2.normalizeValue(value, parent, key, visit, addEntity);
      }).filter(function (value) {
        return value !== undefined && value !== null;
      });
    }
  }, {
    key: 'denormalize',
    value: function denormalize(input, unvisit) {
      var _this3 = this;

      return input && input.map ? input.map(function (value) {
        return _this3.denormalizeValue(value, unvisit);
      }) : input;
    }
  }]);

  return ArraySchema;
}(_Polymorphic2.default);

exports.default = ArraySchema;
});

unwrapExports(_Array);
var _Array_1 = _Array.denormalize;
var _Array_2 = _Array.normalize;

var _Object = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.denormalize = exports.normalize = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var ImmutableUtils$$1 = _interopRequireWildcard(ImmutableUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _normalize = function _normalize(schema, input, parent, key, visit, addEntity) {
  var object = _extends({}, input);
  Object.keys(schema).forEach(function (key) {
    var localSchema = schema[key];
    var value = visit(input[key], input, key, localSchema, addEntity);
    if (value === undefined || value === null) {
      delete object[key];
    } else {
      object[key] = value;
    }
  });
  return object;
};

exports.normalize = _normalize;
var _denormalize = function _denormalize(schema, input, unvisit) {
  if (ImmutableUtils$$1.isImmutable(input)) {
    return ImmutableUtils$$1.denormalizeImmutable(schema, input, unvisit);
  }

  var object = _extends({}, input);
  Object.keys(schema).forEach(function (key) {
    if (object[key]) {
      object[key] = unvisit(object[key], schema[key]);
    }
  });
  return object;
};

exports.denormalize = _denormalize;

var ObjectSchema = function () {
  function ObjectSchema(definition) {
    _classCallCheck(this, ObjectSchema);

    this.define(definition);
  }

  _createClass(ObjectSchema, [{
    key: 'define',
    value: function define(definition) {
      this.schema = Object.keys(definition).reduce(function (entitySchema, key) {
        var schema = definition[key];
        return _extends({}, entitySchema, _defineProperty({}, key, schema));
      }, this.schema || {});
    }
  }, {
    key: 'normalize',
    value: function normalize() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _normalize.apply(undefined, [this.schema].concat(args));
    }
  }, {
    key: 'denormalize',
    value: function denormalize() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _denormalize.apply(undefined, [this.schema].concat(args));
    }
  }]);

  return ObjectSchema;
}();

exports.default = ObjectSchema;
});

unwrapExports(_Object);
var _Object_1 = _Object.denormalize;
var _Object_2 = _Object.normalize;

var src = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.denormalize = exports.normalize = exports.schema = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var _Entity2 = _interopRequireDefault(Entity);



var _Union2 = _interopRequireDefault(Union);



var _Values2 = _interopRequireDefault(Values);



var ArrayUtils = _interopRequireWildcard(_Array);



var ObjectUtils = _interopRequireWildcard(_Object);



var ImmutableUtils$$1 = _interopRequireWildcard(ImmutableUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var visit = function visit(value, parent, key, schema, addEntity) {
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' || !value) {
    return value;
  }

  if ((typeof schema === 'undefined' ? 'undefined' : _typeof(schema)) === 'object' && (!schema.normalize || typeof schema.normalize !== 'function')) {
    var method = Array.isArray(schema) ? ArrayUtils.normalize : ObjectUtils.normalize;
    return method(schema, value, parent, key, visit, addEntity);
  }

  return schema.normalize(value, parent, key, visit, addEntity);
};

var addEntities = function addEntities(entities) {
  return function (schema, processedEntity, value, parent, key) {
    var schemaKey = schema.key;
    var id = schema.getId(value, parent, key);
    if (!(schemaKey in entities)) {
      entities[schemaKey] = {};
    }

    var existingEntity = entities[schemaKey][id];
    if (existingEntity) {
      entities[schemaKey][id] = schema.merge(existingEntity, processedEntity);
    } else {
      entities[schemaKey][id] = processedEntity;
    }
  };
};

var schema = exports.schema = {
  Array: ArrayUtils.default,
  Entity: _Entity2.default,
  Object: ObjectUtils.default,
  Union: _Union2.default,
  Values: _Values2.default
};

var normalize = exports.normalize = function normalize(input, schema) {
  if (!input || (typeof input === 'undefined' ? 'undefined' : _typeof(input)) !== 'object') {
    throw new Error('Unexpected input given to normalize. Expected type to be "object", found "' + (typeof input === 'undefined' ? 'undefined' : _typeof(input)) + '".');
  }

  var entities = {};
  var addEntity = addEntities(entities);

  var result = visit(input, input, null, schema, addEntity);
  return { entities: entities, result: result };
};

var unvisitEntity = function unvisitEntity(id, schema, unvisit, getEntity, cache) {
  var entity = getEntity(id, schema);
  if ((typeof entity === 'undefined' ? 'undefined' : _typeof(entity)) !== 'object' || entity === null) {
    return entity;
  }

  if (!cache[schema.key]) {
    cache[schema.key] = {};
  }

  if (!cache[schema.key][id]) {
    // Ensure we don't mutate it non-immutable objects
    var entityCopy = ImmutableUtils$$1.isImmutable(entity) ? entity : _extends({}, entity);

    // Need to set this first so that if it is referenced further within the
    // denormalization the reference will already exist.
    cache[schema.key][id] = entityCopy;
    cache[schema.key][id] = schema.denormalize(entityCopy, unvisit);
  }

  return cache[schema.key][id];
};

var getUnvisit = function getUnvisit(entities) {
  var cache = {};
  var getEntity = getEntities(entities);

  return function unvisit(input, schema) {
    if ((typeof schema === 'undefined' ? 'undefined' : _typeof(schema)) === 'object' && (!schema.denormalize || typeof schema.denormalize !== 'function')) {
      var method = Array.isArray(schema) ? ArrayUtils.denormalize : ObjectUtils.denormalize;
      return method(schema, input, unvisit);
    }

    if (input === undefined || input === null) {
      return input;
    }

    if (schema instanceof _Entity2.default) {
      return unvisitEntity(input, schema, unvisit, getEntity, cache);
    }

    return schema.denormalize(input, unvisit);
  };
};

var getEntities = function getEntities(entities) {
  var isImmutable = ImmutableUtils$$1.isImmutable(entities);

  return function (entityOrId, schema) {
    var schemaKey = schema.key;

    if ((typeof entityOrId === 'undefined' ? 'undefined' : _typeof(entityOrId)) === 'object') {
      return entityOrId;
    }

    return isImmutable ? entities.getIn([schemaKey, entityOrId.toString()]) : entities[schemaKey][entityOrId];
  };
};

var denormalize = exports.denormalize = function denormalize(input, schema, entities) {
  if (typeof input !== 'undefined') {
    return getUnvisit(entities)(input, schema);
  }
};
});

unwrapExports(src);
var src_1 = src.denormalize;
var src_2 = src.normalize;
var src_3 = src.schema;

var Normalizer = /** @class */ (function () {
    function Normalizer() {
    }
    /**
     * Normalize the data given data.
     */
    Normalizer.process = function (query, record) {
        if (Utils.isEmpty(record)) {
            return {};
        }
        var entity = query.database().schemas[query.model.entity];
        var schema = Array.isArray(record) ? [entity] : entity;
        return src_2(record, schema).entities;
    };
    return Normalizer;
}());

var PivotCreator = /** @class */ (function () {
    function PivotCreator() {
    }
    /**
     * Create an intermediate entity if the data contains any entities that
     * require it for example `belongsTo` or `morphMany`.
     */
    PivotCreator.process = function (query, data) {
        Object.keys(data).forEach(function (entity) {
            var model = query.getModel(entity);
            if (model.hasPivotFields()) {
                Utils.forOwn(model.pivotFields(), function (field) {
                    Utils.forOwn(field, function (attr, key) { attr.createPivots(model, data, key); });
                });
            }
        });
        return data;
    };
    return PivotCreator;
}());

var Incrementer = /** @class */ (function () {
    function Incrementer() {
    }
    /**
     * Increment all fields that have increment attribute.
     */
    Incrementer.process = function (query, data) {
        var _this = this;
        return Utils.mapValues(data, function (records, entity) {
            var newQuery = query.newPlainQuery(entity);
            // If the entity doesn't have increment attribute, do nothing and
            // just return immediately.
            if (!newQuery.model.hasIncrementFields()) {
                return records;
            }
            _this.processRecordsByFields(records, newQuery);
            return records;
        });
    };
    /**
     * Process all of the increment fields.
     */
    Incrementer.processRecordsByFields = function (records, query) {
        var _this = this;
        var fields = query.model.getIncrementFields();
        Utils.forOwn(fields, function (_attr, key) {
            _this.processRecords(records, query, key);
        });
    };
    /**
     * Process all records and increment all field that is defined as increment.
     */
    Incrementer.processRecords = function (records, query, key) {
        var max = this.max(records, query, key);
        Utils.forOwn(records, function (record) {
            if (typeof record[key] !== 'number') {
                record[key] = ++max;
            }
        });
    };
    /**
     * Get the max value of the specified field with given data combined
     * with existing records.
     */
    Incrementer.max = function (records, query, field) {
        var maxInState = query.max(field);
        var maxInRecord = Math.max.apply(Math, Utils.map(records, function (record) {
            var id = record[field];
            return typeof id === 'number' ? id : 0;
        }));
        return Math.max(maxInRecord, maxInState);
    };
    return Incrementer;
}());

var Attacher = /** @class */ (function () {
    function Attacher() {
    }
    /**
     * Attach missing relational key to the records.
     */
    Attacher.process = function (query, data) {
        Utils.forOwn(data, function (entity, name) {
            var fields = query.getModel(name).fields();
            Utils.forOwn(entity, function (record) {
                Utils.forOwn(record, function (value, key) {
                    var field = fields[key];
                    if (field instanceof Relation) {
                        field.attach(value, record, data);
                    }
                });
            });
        });
        return data;
    };
    return Attacher;
}());

var IdFixer = /** @class */ (function () {
    function IdFixer() {
    }
    /**
     * Fix all of the "no key" records with appropriate id value if it can.
     */
    IdFixer.process = function (query, data) {
        var _this = this;
        return Utils.mapValues(data, function (records, entity) {
            var newQuery = query.newPlainQuery(entity);
            return _this.processRecords(records, newQuery);
        });
    };
    /**
     * Process records to Fix all of the "no key" records with
     * appropriate id value if it can.
     */
    IdFixer.processRecords = function (records, query) {
        return Object.keys(records).reduce(function (newRecords, id) {
            var record = records[id];
            var newId = query.model.id(record);
            var newStringId = isNaN(newId) ? newId : newId.toString();
            if (newId === undefined || id === newStringId) {
                newRecords[id] = record;
                return newRecords;
            }
            newRecords[newStringId] = __assign({}, record, { $id: newId });
            return newRecords;
        }, {});
    };
    return IdFixer;
}());

var Processor = /** @class */ (function () {
    function Processor() {
    }
    /**
     * Normalize the given data.
     */
    Processor.normalize = function (query, record) {
        var data = Normalizer.process(query, record);
        data = PivotCreator.process(query, data);
        data = Incrementer.process(query, data);
        data = Attacher.process(query, data);
        data = IdFixer.process(query, data);
        return data;
    };
    return Processor;
}());

var WhereFilter = /** @class */ (function () {
    function WhereFilter() {
    }
    /**
     * Filter the given data by registered where clause.
     */
    WhereFilter.filter = function (query, records) {
        var _this = this;
        if (query.wheres.length === 0) {
            return records;
        }
        return records.filter(function (record) { return _this.check(query, record); });
    };
    /**
     * Checks if given Record matches the registered where clause.
     */
    WhereFilter.check = function (query, record) {
        var whereTypes = Utils.groupBy(query.wheres, function (where) { return where.boolean; });
        var comparator = this.getComparator(query, record);
        var results = [];
        whereTypes.and && results.push(whereTypes.and.every(comparator));
        whereTypes.or && results.push(whereTypes.or.some(comparator));
        return results.indexOf(true) !== -1;
    };
    /**
     * Get comparator for the where clause.
     */
    WhereFilter.getComparator = function (query, record) {
        var _this = this;
        return function (where) {
            // Function with Record and Query as argument.
            if (typeof where.field === 'function') {
                var newQuery = new Query(query.rootState, query.entity);
                var result = _this.executeWhereClosure(newQuery, record, where.field);
                if (typeof result === 'boolean') {
                    return result;
                }
                // If closure returns undefined, we need to execute the local query
                var matchingRecords = newQuery.get();
                // And check if current record is part of the resul
                return !Utils.isEmpty(matchingRecords.filter(function (rec) {
                    return rec['$id'] === record['$id'];
                }));
            }
            // Function with Record value as argument.
            if (typeof where.value === 'function') {
                return where.value(record[where.field]);
            }
            // Check if field value is in given where Array.
            if (Array.isArray(where.value)) {
                return where.value.indexOf(record[where.field]) !== -1;
            }
            // Simple equal check.
            return record[where.field] === where.value;
        };
    };
    /**
     * Execute where closure.
     */
    WhereFilter.executeWhereClosure = function (query, record, closure) {
        if (closure.length !== 3) {
            return closure(record, query);
        }
        var model = new query.model(record);
        return closure(record, query, model);
    };
    return WhereFilter;
}());

var OrderByFilter = /** @class */ (function () {
    function OrderByFilter() {
    }
    /**
     * Sort the given data by registered orders.
     */
    OrderByFilter.filter = function (query, records) {
        if (query.orders.length === 0) {
            return records;
        }
        var keys = query.orders.map(function (order) { return order.field; });
        var directions = query.orders.map(function (order) { return order.direction; });
        return Utils.orderBy(records, keys, directions);
    };
    return OrderByFilter;
}());

var LimitFilter = /** @class */ (function () {
    function LimitFilter() {
    }
    /**
     * Limit the given records by the lmilt and offset.
     */
    LimitFilter.filter = function (query, records) {
        return records.slice(query._offset, query._offset + query._limit);
    };
    return LimitFilter;
}());

var Filter = /** @class */ (function () {
    function Filter() {
    }
    /**
     * Filter the given data by registered where clause.
     */
    Filter.where = function (query, records) {
        return WhereFilter.filter(query, records);
    };
    /**
     * Sort the given data by registered orders.
     */
    Filter.orderBy = function (query, records) {
        return OrderByFilter.filter(query, records);
    };
    /**
     * Limit the given records by the lmilt and offset.
     */
    Filter.limit = function (query, records) {
        return LimitFilter.filter(query, records);
    };
    return Filter;
}());

var Loader = /** @class */ (function () {
    function Loader() {
    }
    /**
     * Set eager load relation and constraint.
     */
    Loader.setEagerLoad = function (query, relation, constraint) {
        if (constraint === void 0) { constraint = null; }
        if (!query.load[relation]) {
            query.load[relation] = [];
        }
        constraint && query.load[relation].push(constraint);
    };
    /**
     * Set the relationships that should be loaded.
     */
    Loader.with = function (query, name, constraint) {
        // If the name of the relation is `*`, we'll load all relationships.
        if (name === '*') {
            this.withAll(query);
            return;
        }
        // Else parse relations and set appropriate constraints.
        this.parseWithRelations(query, name.split('.'), constraint);
    };
    /**
     * Query all relations.
     */
    Loader.withAll = function (query, constraint) {
        if (constraint === void 0) { constraint = function () { return null; }; }
        var fields = query.model.getFields();
        for (var field in query.model.getFields()) {
            fields[field] instanceof Relation && this.with(query, field, constraint);
        }
    };
    /**
     * Query all relations recursively.
     */
    Loader.withAllRecursive = function (query, depth) {
        this.withAll(query, function (relatedQuery) {
            depth > 0 && relatedQuery.withAllRecursive(depth - 1);
        });
    };
    /**
     * Parse a list of relations into individuals.
     */
    Loader.parseWithRelations = function (query, relations, constraint) {
        var _this = this;
        var relation = relations[0];
        relation.split('|').forEach(function (name) {
            _this.setEagerLoad(query, name);
        });
        if (relations.length === 1) {
            this.setEagerLoad(query, relation, constraint);
            return;
        }
        relations.shift();
        this.addNestedWiths(query, relations, constraint);
    };
    /**
     * Parse the nested relationships in a relation.
     */
    Loader.addNestedWiths = function (query, relations, constraint) {
        var relation = relations.join('.');
        this.setEagerLoad(query, relation, function (nestedQuery) {
            nestedQuery.with(relation, constraint);
        });
    };
    /**
     * Eager load the relationships for the given records.
     */
    Loader.eagerLoadRelations = function (query, records) {
        var fields = query.model.getFields();
        for (var name_1 in query.load) {
            var relation = fields[name_1];
            if (relation instanceof Relation) {
                relation.load(query, records, name_1);
            }
        }
    };
    return Loader;
}());

var Hook = /** @class */ (function () {
    /**
     * Create a lidecycle hook instance.
     */
    function Hook(query) {
        this.query = query;
    }
    /**
     * Register a callback. It Returns unique ID for registered callback.
     */
    Hook.on = function (on, callback, once) {
        if (once === void 0) { once = false; }
        var uid = this.lastHookId + 1;
        this.lastHookId = uid;
        if (!this.hooks[on]) {
            this.hooks[on] = [];
        }
        this.hooks[on].push({ callback: callback, once: once, uid: uid });
        return uid;
    };
    /**
     * Remove hook registration.
     */
    Hook.off = function (uid) {
        var _this = this;
        var removed = false;
        Object.keys(this.hooks).some(function (on) {
            var hook = _this.hooks[on];
            var index = hook.findIndex(function (h) { return h.uid === uid; });
            if (index !== -1) {
                hook.splice(index, 1);
                removed = true;
            }
            return removed;
        });
        return removed;
    };
    /**
     * Get the hook class.
     */
    Hook.prototype.self = function () {
        return this.constructor;
    };
    /**
     * Get the action hook.
     */
    Hook.prototype.getActionHook = function (name) {
        if (!this.query.actionContext) {
            return null;
        }
        var hook = this.query.module.actions && this.query.module.actions[name];
        return hook || null;
    };
    /**
     * Get the global hook.
     */
    Hook.prototype.getGlobalHook = function (name) {
        if (!this.self().hooks[name]) {
            return null;
        }
        return this.self().hooks[name];
    };
    /**
     * Check if the given hook exist.
     */
    Hook.prototype.has = function (name) {
        return !!this.getActionHook(name) || !!this.getGlobalHook(name);
    };
    /**
     * Execute the callback of the given hook.
     */
    Hook.prototype.execute = function (on, data) {
        if (!this.has(on)) {
            return data;
        }
        data = this.executeActionHook(on, data);
        data = this.executeGlobalHook(on, data);
        return data;
    };
    /**
     * Execute the action hook.
     */
    Hook.prototype.executeActionHook = function (on, data) {
        if (!this.query.actionContext) {
            return data;
        }
        var hook = this.getActionHook(on);
        if (!hook) {
            return data;
        }
        var result = hook(this.query.actionContext, data);
        if (result === false) {
            return false;
        }
        return result || data;
    };
    /**
     * Execute the global callback of the given hook.
     */
    Hook.prototype.executeGlobalHook = function (on, data) {
        var _this = this;
        if (data === false) {
            return false;
        }
        var hooks = this.getGlobalHook(on);
        if (!hooks) {
            return data;
        }
        // Track indexes to delete.
        var deleteHookIndexes = [];
        // Loop all hooks.
        hooks.forEach(function (hook, hookIndex) {
            var callback = hook.callback, once = hook.once;
            data = callback.call(_this.query, data, _this.query.entity);
            // Add hook index to delete.
            once && deleteHookIndexes.push(hookIndex);
        });
        // Remove hooks to be deleted in reverse order.
        deleteHookIndexes.reverse().forEach(function (hookIndex) {
            hooks.splice(hookIndex, 1);
        });
        return data;
    };
    /**
     * Execute the callback for all given records.
     */
    Hook.prototype.executeOnRecords = function (on, records) {
        var _this = this;
        if (!this.has(on)) {
            return records;
        }
        return Object.keys(records).reduce(function (newRecords, id) {
            var record = records[id];
            var result = _this.execute(on, record);
            if (result === false) {
                return newRecords;
            }
            newRecords[id] = result;
            return newRecords;
        }, {});
    };
    /**
     * Execute the callback for the given collection.
     */
    Hook.prototype.executeOnCollection = function (on, collection) {
        var _this = this;
        if (!this.has(on)) {
            return collection;
        }
        collection.map(function (item) { _this.execute(on, item); });
        return collection;
    };
    /**
     * Global lifecycle hooks for the query.
     */
    Hook.hooks = {};
    /**
     * Hook UID counter.
     */
    Hook.lastHookId = 0;
    return Hook;
}());

var Query = /** @class */ (function () {
    /**
     * Create a new Query instance.
     */
    function Query(state, entity, wrap) {
        if (wrap === void 0) { wrap = true; }
        /**
         * The where constraints for the query.
         */
        this.wheres = [];
        /**
         * The orders of the query result.
         */
        this.orders = [];
        /**
         * Number of results to skip.
         */
        this._offset = 0;
        /**
         * Maximum number of records to return.
         *
         * We use polyfill of `Number.MAX_SAFE_INTEGER` for IE11 here.
         */
        this._limit = Math.pow(2, 53) - 1;
        /**
         * The relationships that should be eager loaded with the result.
         */
        this.load = {};
        /**
         * The Vuex Action context.
         */
        this.actionContext = null;
        this.rootState = state;
        this.state = state[entity];
        this.entity = entity;
        this.model = this.getModel(entity);
        this.module = this.getModule(entity);
        this.hook = new Hook(this);
        this.wrap = wrap;
    }
    /**
     * Create a new query instance
     */
    Query.query = function (state, name, wrap) {
        return new this(state, name, wrap);
    };
    /**
     * Get the database from the container.
     */
    Query.database = function () {
        return Container.database;
    };
    /**
     * Get model of given name from the container.
     */
    Query.getModel = function (name) {
        return this.database().model(name);
    };
    /**
     * Get all models from the container.
     */
    Query.getModels = function () {
        return this.database().models();
    };
    /**
     * Get module of given name from the container.
     */
    Query.getModule = function (name) {
        return this.database().module(name);
    };
    /**
     * Get all modules from the container.
     */
    Query.getModules = function () {
        return this.database().modules();
    };
    /**
     * Save new data to the state. It will remove all existing data in the
     * state. If you want to keep existing data while saving new data,
     * use `insert` instead.
     */
    Query.create = function (state, entity, data, options) {
        return (new this(state, entity)).create(data, options);
    };
    /**
     * Commit `create` to the state.
     */
    Query.commitCreate = function (state, entity, records) {
        (new this(state, entity)).commitCreate(records);
    };
    /**
     * Insert given data to the state. Unlike `create`, this method will not
     * remove existing data within the state, but it will update the data
     * with the same primary key.
     */
    Query.insert = function (state, entity, data, options) {
        return (new this(state, entity)).insert(data, options);
    };
    /**
     * Commit `insert` to the state.
     */
    Query.commitInsert = function (state, entity, data) {
        (new this(state, entity)).commitInsert(data);
    };
    /**
     * Update data in the state.
     */
    Query.update = function (state, entity, data, condition, options) {
        return (new this(state, entity)).update(data, condition, options);
    };
    /**
     * Commit `update` to the state.
     */
    Query.commitUpdate = function (state, entity, data) {
        (new this(state, entity)).commitUpdate(data);
    };
    /**
     * Insert or update given data to the state. Unlike `insert`, this method
     * will not replace existing data within the state, but it will update only
     * the submitted data with the same primary key.
     */
    Query.insertOrUpdate = function (state, entity, data, options) {
        return (new this(state, entity)).insertOrUpdate(data, options);
    };
    /**
     * Get all data of the given entity from the state.
     */
    Query.all = function (state, entity, wrap) {
        return (new this(state, entity, wrap)).get();
    };
    /**
     * Get the record of the given id.
     */
    Query.find = function (state, entity, id, wrap) {
        return (new this(state, entity, wrap)).find(id);
    };
    /**
     * Get the count of the retrieved data.
     */
    Query.count = function (state, entity, wrap) {
        return (new this(state, entity, wrap)).count();
    };
    /**
     * Get the max value of the specified filed.
     */
    Query.max = function (state, entity, field, wrap) {
        return (new this(state, entity, wrap)).max(field);
    };
    /**
     * Get the min value of the specified filed.
     */
    Query.min = function (state, entity, field, wrap) {
        return (new this(state, entity, wrap)).min(field);
    };
    /**
     * Get the sum value of the specified filed.
     */
    Query.sum = function (state, entity, field, wrap) {
        return (new this(state, entity, wrap)).sum(field);
    };
    /**
     * Delete a record from the state.
     */
    Query.delete = function (state, entity, condition) {
        return (new this(state, entity)).delete(condition);
    };
    /**
     * Delete all records from the state.
     */
    Query.deleteAll = function (state, entity) {
        var _this = this;
        if (entity) {
            return (new this(state, entity)).deleteAll();
        }
        var models = this.getModels();
        Utils.forOwn(models, function (_model, name) {
            state[name] && (new _this(state, name)).deleteAll();
        });
    };
    /**
     * Commit `delete` to the state.
     */
    Query.commitDelete = function (state, entity, ids) {
        (new Query(state, entity)).commitDelete(ids);
    };
    /**
     * Register a callback. It Returns unique ID for registered callback.
     */
    Query.on = function (on, callback, once) {
        return Hook.on(on, callback, once);
    };
    /**
     * Remove hook registration.
     */
    Query.off = function (uid) {
        return Hook.off(uid);
    };
    /**
     * Get query class.
     */
    Query.prototype.self = function () {
        return this.constructor;
    };
    /**
     * Create a new query instance.
     */
    Query.prototype.newQuery = function (entity) {
        return (new Query(this.rootState, entity)).setActionContext(this.actionContext);
    };
    /**
     * Create a new query instance with wrap property set to false.
     */
    Query.prototype.newPlainQuery = function (entity) {
        entity = entity || this.entity;
        return (new Query(this.rootState, entity)).plain();
    };
    /**
     * Get the database from the container.
     */
    Query.prototype.database = function () {
        return this.self().database();
    };
    /**
     * Get model of given name from the container.
     */
    Query.prototype.getModel = function (name) {
        var entity = name || this.entity;
        return this.self().getModel(entity);
    };
    /**
     * Get all models from the container.
     */
    Query.prototype.getModels = function () {
        return this.self().getModels();
    };
    /**
     * Get module of given name from the container.
     */
    Query.prototype.getModule = function (name) {
        var entity = name || this.entity;
        return this.self().getModule(entity);
    };
    /**
     * Get all modules from the container.
     */
    Query.prototype.getModules = function () {
        return this.self().getModules();
    };
    /**
     * Commit changes to the state. This method will call mutation name of
     * `method` with `payload` if the method is called from an action to
     * avoid mutating state change outside of mutation handler.
     */
    Query.prototype.commit = function (method, payload, callback) {
        if (!this.actionContext) {
            callback();
            return;
        }
        payload = __assign({ entity: this.entity }, payload);
        this.actionContext.commit(this.rootState.$name + "/" + method, payload, { root: true });
    };
    /**
     * Set wrap flag to false.
     */
    Query.prototype.plain = function () {
        this.wrap = false;
        return this;
    };
    /**
     * Set Vuex Action Context to the query.
     */
    Query.prototype.setActionContext = function (context) {
        this.actionContext = context;
        return this;
    };
    /**
     * Save new data to the state. It will remove all existing data in the
     * state. If you want to keep existing data while saving new data,
     * use `insert` instead.
     */
    Query.prototype.create = function (data, options) {
        return this.persist(data, 'create', options);
    };
    /**
     * Create records to the state.
     */
    Query.prototype.createMany = function (records) {
        records = this.model.hydrateMany(records);
        records = this.hook.executeOnRecords('beforeCreate', records);
        this.commitCreate(records);
        var collection = this.collect(this.records(records));
        return this.hook.executeOnCollection('afterCreate', collection);
    };
    /**
     * Commit `create` to the state.
     */
    Query.prototype.commitCreate = function (data) {
        var _this = this;
        this.commit('commitCreate', { data: data }, function () {
            _this.state.data = data;
        });
    };
    /**
     * Insert given data to the state. Unlike `create`, this method will not
     * remove existing data within the state, but it will update the data
     * with the same primary key.
     */
    Query.prototype.insert = function (data, options) {
        return this.persist(data, 'insert', options);
    };
    /**
     * Insert list of records in the state.
     */
    Query.prototype.insertMany = function (records) {
        records = this.model.hydrateMany(records);
        records = this.hook.executeOnRecords('beforeCreate', records);
        this.commitInsert(records);
        var collection = this.collect(this.records(records));
        return this.hook.executeOnCollection('afterCreate', collection);
    };
    /**
     * Commit `insert` to the state.
     */
    Query.prototype.commitInsert = function (data) {
        var _this = this;
        this.commit('commitInsert', { data: data }, function () {
            _this.state.data = __assign({}, _this.state.data, data);
        });
    };
    /**
     * Update data in the state.
     */
    Query.prototype.update = function (data, condition, options) {
        // If the data is array, normalize the data and update them.
        if (Array.isArray(data)) {
            return this.persist(data, 'update', options);
        }
        // Let's see what we can do if `data` is closure.
        if (typeof data === 'function') {
            // If the data is closure, but there's no condition, we will not know
            // what record to update so raise an error an abort.
            if (!condition) {
                throw new Error('You must specify `where` to update records by specifying `data` as a closure.');
            }
            // If the condition is closure, update records by the closure.
            if (typeof condition === 'function') {
                return this.updateByCondition(data, condition);
            }
            // Else the condition is either String or Number, so let's
            // update the record by ID.
            return this.updateById(data, condition);
        }
        // Now the data is not a closure, and it's not an array, so it should be an object.
        // If the condition is closure, we can't normalize the data so let's update
        // records using the closure.
        if (typeof condition === 'function') {
            return this.updateByCondition(data, condition);
        }
        // If there's no condition, let's normalize the data and update them.
        if (!condition) {
            return this.persist(data, 'update', options);
        }
        // Now since the condition is either String or Number, let's check if the
        // model's primary key is not a composite key. If yes, we can't set the
        // condition as ID value for the record so throw an error and abort.
        if (Array.isArray(this.model.primaryKey)) {
            throw new Error('You can not specify `where` value when you have a composite key defined in your model. Please include composite keys to the `data` fields.');
        }
        // Finally,let's add condition as the primary key of the object and
        // then normalize them to update the records.
        data[this.model.primaryKey] = condition;
        return this.persist(data, 'update', options);
    };
    /**
     * Update all records.
     */
    Query.prototype.updateMany = function (records) {
        var _this = this;
        var toBeUpdated = {};
        records = this.model.fixMany(records, []);
        Utils.forOwn(records, function (record, id) {
            var state = _this.state.data[id];
            if (!state) {
                return;
            }
            var newState = JSON.parse(JSON.stringify(state));
            _this.merge(record, newState);
            toBeUpdated[id] = newState;
        });
        toBeUpdated = this.hook.executeOnRecords('beforeUpdate', toBeUpdated);
        this.commitUpdate(toBeUpdated);
        var collection = this.collect(this.records(toBeUpdated));
        this.hook.executeOnCollection('afterUpdate', collection);
        return collection;
    };
    /**
     * Update the state by id.
     */
    Query.prototype.updateById = function (data, id) {
        var _a;
        id = typeof id === 'number' ? id.toString() : id;
        var state = this.state.data[id];
        if (!state) {
            return null;
        }
        var record = JSON.parse(JSON.stringify(state));
        typeof data === 'function' ? data(record) : this.merge(this.model.fix(data), record);
        var hookResult = this.hook.execute('beforeUpdate', record);
        if (hookResult === false) {
            return null;
        }
        this.commitUpdate((_a = {}, _a[id] = hookResult, _a));
        var item = this.item(hookResult);
        this.hook.execute('afterUpdate', item);
        return item;
    };
    /**
     * Update the state by condition.
     */
    Query.prototype.updateByCondition = function (data, condition) {
        var _this = this;
        var toBeUpdated = {};
        Utils.forOwn(this.state.data, function (record, id) {
            if (!condition(record)) {
                return;
            }
            var state = JSON.parse(JSON.stringify(record));
            typeof data === 'function' ? data(state) : _this.merge(_this.model.fix(data), state);
            toBeUpdated[id] = state;
        });
        toBeUpdated = this.hook.executeOnRecords('beforeUpdate', toBeUpdated);
        this.commitUpdate(toBeUpdated);
        var collection = this.collect(this.records(toBeUpdated));
        this.hook.executeOnCollection('afterUpdate', collection);
        return collection;
    };
    /**
     * Commit `update` to the state.
     */
    Query.prototype.commitUpdate = function (data) {
        var _this = this;
        this.commit('commitUpdate', { data: data }, function () {
            _this.state.data = __assign({}, _this.state.data, data);
        });
    };
    /**
     * Insert or update given data to the state. Unlike `insert`, this method
     * will not replace existing data within the state, but it will update only
     * the submitted data with the same primary key.
     */
    Query.prototype.insertOrUpdate = function (data, options) {
        return this.persist(data, 'insertOrUpdate', options);
    };
    /**
     * Insert or update the records.
     */
    Query.prototype.insertOrUpdateMany = function (records) {
        var _this = this;
        var toBeInserted = {};
        var toBeUpdated = {};
        Utils.forOwn(records, function (record, id) {
            if (_this.state.data[id]) {
                toBeUpdated[id] = record;
                return;
            }
            toBeInserted[id] = record;
        });
        return this.collect(this.insertMany(toBeInserted).concat(this.updateMany(toBeUpdated)));
    };
    /**
     * Persist data into the state.
     */
    Query.prototype.persist = function (data, method, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        data = this.normalize(data);
        if (Utils.isEmpty(data)) {
            method === 'create' && this.commitCreate({});
            return {};
        }
        return Object.keys(data).reduce(function (collection, entity) {
            var query = _this.newQuery(entity);
            var persistMethod = _this.getPersistMethod(entity, method, options);
            var records = query[persistMethod + "Many"](data[entity]);
            if (records.length > 0) {
                collection[entity] = records;
            }
            return collection;
        }, {});
    };
    /**
     * Get method for the persist.
     */
    Query.prototype.getPersistMethod = function (entity, method, options) {
        if (options.create && options.create.includes(entity)) {
            return 'create';
        }
        if (options.insert && options.insert.includes(entity)) {
            return 'insert';
        }
        if (options.update && options.update.includes(entity)) {
            return 'update';
        }
        if (options.insertOrUpdate && options.insertOrUpdate.includes(entity)) {
            return 'insertOrUpdate';
        }
        return method;
    };
    /**
     * Normalize the given data.
     */
    Query.prototype.normalize = function (data) {
        return Processor.normalize(this, data);
    };
    /**
     * Update the state value by merging the given record and state.
     */
    Query.prototype.merge = function (data, state, fields) {
        var _this = this;
        var theFields = fields || this.model.getFields();
        Utils.forOwn(data, function (value, key) {
            var field = theFields[key];
            if (field instanceof Attribute) {
                state[key] = value;
                return;
            }
            _this.merge(value, state[key], field);
        });
    };
    /**
     * Returns all record of the query chain result. This method is alias
     * of the `get` method.
     */
    Query.prototype.all = function () {
        return this.get();
    };
    /**
     * Get the record of the given id.
     */
    Query.prototype.find = function (id) {
        var record = this.state.data[id];
        if (!record) {
            return null;
        }
        return this.item(__assign({}, record));
    };
    /**
     * Returns all record of the query chain result.
     */
    Query.prototype.get = function () {
        var records = this.process();
        return this.collect(records);
    };
    /**
     * Returns the first record of the query chain result.
     */
    Query.prototype.first = function () {
        var records = this.process();
        return this.item(records[0]);
    };
    /**
     * Returns the last single record of the query chain result.
     */
    Query.prototype.last = function () {
        var records = this.process();
        var last = records.length - 1;
        return this.item(records[last]);
    };
    /**
     * Get all the records from the state and convert them into the array.
     * If you pass records, it will create an array out of that records
     * instead of the store state.
     */
    Query.prototype.records = function (records) {
        var theRecords = records || this.state.data;
        return Object.keys(theRecords).map(function (id) { return (__assign({}, theRecords[id])); });
    };
    /**
     * Add a and where clause to the query.
     */
    Query.prototype.where = function (field, value) {
        this.wheres.push({ field: field, value: value, boolean: 'and' });
        return this;
    };
    /**
     * Add a or where clause to the query.
     */
    Query.prototype.orWhere = function (field, value) {
        this.wheres.push({ field: field, value: value, boolean: 'or' });
        return this;
    };
    /**
     * Add an order to the query.
     */
    Query.prototype.orderBy = function (field, direction) {
        if (direction === void 0) { direction = 'asc'; }
        this.orders.push({ field: field, direction: direction });
        return this;
    };
    /**
     * Add an offset to the query.
     */
    Query.prototype.offset = function (offset) {
        this._offset = offset;
        return this;
    };
    /**
     * Add limit to the query.
     */
    Query.prototype.limit = function (limit) {
        this._limit = limit;
        return this;
    };
    /**
     * Set the relationships that should be loaded.
     */
    Query.prototype.with = function (name, constraint) {
        if (constraint === void 0) { constraint = null; }
        Loader.with(this, name, constraint);
        return this;
    };
    /**
     * Query all relations.
     */
    Query.prototype.withAll = function (constraint) {
        if (constraint === void 0) { constraint = function () { return null; }; }
        Loader.withAll(this, constraint);
        return this;
    };
    /**
     * Query all relations recursively.
     */
    Query.prototype.withAllRecursive = function (depth) {
        if (depth === void 0) { depth = 3; }
        Loader.withAllRecursive(this, depth);
        return this;
    };
    /**
     * Set where constraint based on relationship existence.
     */
    Query.prototype.has = function (name, constraint, count) {
        return this.addHasConstraint(name, constraint, count, true);
    };
    /**
     * Set where constraint based on relationship absence.
     */
    Query.prototype.hasNot = function (name, constraint, count) {
        return this.addHasConstraint(name, constraint, count, false);
    };
    /**
     * Add where constraints based on has or hasNot condition.
     */
    Query.prototype.addHasConstraint = function (name, constraint, count, existence) {
        var ids = this.matchesHasRelation(name, constraint, count, existence);
        this.where('$id', function (value) { return ids.includes(value); });
        return this;
    };
    /**
     * Add where has condition.
     */
    Query.prototype.whereHas = function (name, constraint) {
        return this.addWhereHasConstraint(name, constraint, true);
    };
    /**
     * Add where has not condition.
     */
    Query.prototype.whereHasNot = function (name, constraint) {
        return this.addWhereHasConstraint(name, constraint, false);
    };
    /**
     * Add where has constraints that only matches the relationship constraint.
     */
    Query.prototype.addWhereHasConstraint = function (name, constraint, existence) {
        var ids = this.matchesWhereHasRelation(name, constraint, existence);
        this.where('$id', function (value) { return ids.includes(value); });
        return this;
    };
    /**
     * Process the query and filter data.
     */
    Query.prototype.process = function () {
        var records = this.records();
        // Process `beforeProcess` hook.
        records = this.hook.execute('beforeProcess', records);
        // Let's filter the records at first by the where clauses.
        records = this.filterWhere(records);
        // Process `afterWhere` hook.
        records = this.hook.execute('afterWhere', records);
        // Next, lets sort the data.
        records = this.filterOrderBy(records);
        // Process `afterOrderBy` hook.
        records = this.hook.execute('afterOrderBy', records);
        // Finally, slice the record by limit and offset.
        records = this.filterLimit(records);
        // Process `afterLimit` hook.
        records = this.hook.execute('afterLimit', records);
        return records;
    };
    /**
     * Filter the given data by registered where clause.
     */
    Query.prototype.filterWhere = function (records) {
        return Filter.where(this, records);
    };
    /**
     * Sort the given data by registered orders.
     */
    Query.prototype.filterOrderBy = function (records) {
        return Filter.orderBy(this, records);
    };
    /**
     * Limit the given records by the lmilt and offset.
     */
    Query.prototype.filterLimit = function (records) {
        return Filter.limit(this, records);
    };
    /**
     * Get the count of the retrieved data.
     */
    Query.prototype.count = function () {
        return this.plain().get().length;
    };
    /**
     * Get the max value of the specified filed.
     */
    Query.prototype.max = function (field) {
        var numbers = this.plain().get().reduce(function (numbers, item) {
            if (typeof item[field] === 'number') {
                numbers.push(item[field]);
            }
            return numbers;
        }, []);
        return numbers.length === 0 ? 0 : Math.max.apply(Math, numbers);
    };
    /**
     * Get the min value of the specified filed.
     */
    Query.prototype.min = function (field) {
        var numbers = this.plain().get().reduce(function (numbers, item) {
            if (typeof item[field] === 'number') {
                numbers.push(item[field]);
            }
            return numbers;
        }, []);
        return numbers.length === 0 ? 0 : Math.min.apply(Math, numbers);
    };
    /**
     * Get the sum value of the specified filed.
     */
    Query.prototype.sum = function (field) {
        return this.plain().get().reduce(function (sum, item) {
            if (typeof item[field] === 'number') {
                sum += item[field];
            }
            return sum;
        }, 0);
    };
    /**
     * Create a item from given record.
     */
    Query.prototype.item = function (item) {
        if (!item) {
            return null;
        }
        Loader.eagerLoadRelations(this, [item]);
        return this.model.make(item, !this.wrap);
    };
    /**
     * Create a collection (array) from given records.
     */
    Query.prototype.collect = function (collection) {
        var _this = this;
        if (Utils.isEmpty(collection)) {
            return [];
        }
        Loader.eagerLoadRelations(this, collection);
        return collection.map(function (record) { return _this.model.make(record, !_this.wrap); });
    };
    /**
     * Check if the given collection has given relationship.
     */
    Query.prototype.matchesHasRelation = function (name, constraint, count, existence) {
        if (existence === void 0) { existence = true; }
        var _constraint;
        if (constraint === undefined) {
            _constraint = function (record) { return record.length >= 1; };
        }
        else if (typeof constraint === 'number') {
            _constraint = function (record) { return record.length >= constraint; };
        }
        else if (constraint === '=' && typeof count === 'number') {
            _constraint = function (record) { return record.length === count; };
        }
        else if (constraint === '>' && typeof count === 'number') {
            _constraint = function (record) { return record.length > count; };
        }
        else if (constraint === '>=' && typeof count === 'number') {
            _constraint = function (record) { return record.length >= count; };
        }
        else if (constraint === '<' && typeof count === 'number') {
            _constraint = function (record) { return record.length < count; };
        }
        else if (constraint === '<=' && typeof count === 'number') {
            _constraint = function (record) { return record.length <= count; };
        }
        var data = (new Query(this.rootState, this.entity, false)).with(name).get();
        var ids = [];
        data.forEach(function (item) {
            var target = item[name];
            var result = false;
            if (!target) {
                result = false;
            }
            else if (Array.isArray(target) && target.length < 1) {
                result = false;
            }
            else if (Array.isArray(target)) {
                result = _constraint(target);
            }
            else if (target) {
                result = _constraint([target]);
            }
            if (result !== existence) {
                return;
            }
            ids.push(item.$id);
        });
        return ids;
    };
    /**
     * Get all id of the record that matches the relation constraints.
     */
    Query.prototype.matchesWhereHasRelation = function (name, constraint, existence) {
        if (existence === void 0) { existence = true; }
        var data = this.newPlainQuery().with(name, constraint).get();
        var ids = [];
        data.forEach(function (item) {
            var target = item[name];
            var result = Array.isArray(target) ? !!target.length : !!target;
            if (result !== existence) {
                return;
            }
            ids.push(item.$id);
        });
        return ids;
    };
    /**
     * Delete records from the state.
     */
    Query.prototype.delete = function (condition) {
        if (typeof condition === 'function') {
            return this.deleteByCondition(condition);
        }
        return this.deleteById(condition);
    };
    /**
     * Delete a record by id.
     */
    Query.prototype.deleteById = function (id) {
        id = typeof id === 'number' ? id.toString() : id;
        var state = this.state.data[id];
        if (!state) {
            return null;
        }
        var hookResult = this.hook.execute('beforeDelete', state);
        if (hookResult === false) {
            return null;
        }
        this.commitDelete([id]);
        var item = this.item(hookResult);
        this.hook.execute('afterDelete', item);
        return item;
    };
    /**
     * Delete record by condition.
     */
    Query.prototype.deleteByCondition = function (condition) {
        var toBeDeleted = {};
        Utils.forOwn(this.state.data, function (record, id) {
            if (!condition(record)) {
                return;
            }
            toBeDeleted[id] = record;
        });
        toBeDeleted = this.hook.executeOnRecords('beforeDelete', toBeDeleted);
        this.commitDelete(Object.keys(toBeDeleted));
        var collection = this.collect(this.records(toBeDeleted));
        this.hook.executeOnCollection('afterDelete', collection);
        return collection;
    };
    /**
     * Delete all records from the state.
     */
    Query.prototype.deleteAll = function () {
        var toBeDeleted = this.state.data;
        toBeDeleted = this.hook.executeOnRecords('beforeDelete', toBeDeleted);
        this.commitDelete(Object.keys(toBeDeleted));
        var collection = this.collect(this.records(toBeDeleted));
        this.hook.executeOnCollection('afterDelete', collection);
        return collection;
    };
    /**
     * Commit `delete` to the state.
     */
    Query.prototype.commitDelete = function (ids) {
        var _this = this;
        this.commit('commitDelete', { ids: ids }, function () {
            _this.state.data = Object.keys(_this.state.data).reduce(function (state, id) {
                if (!ids.includes(id)) {
                    state[id] = _this.state.data[id];
                }
                return state;
            }, {});
        });
    };
    return Query;
}());

var Getters = {
    /**
     * Create a new Query instance.
     */
    query: function (state, _getters, _rootState, rootGetters) { return function (wrap) {
        return rootGetters[state.$connection + "/query"](state.$name, wrap);
    }; },
    /**
     * Get all data of given entity.
     */
    all: function (state, _getters, _rootState, rootGetters) { return function (wrap) {
        return rootGetters[state.$connection + "/all"](state.$name, wrap);
    }; },
    /**
     * Find a data of the given entity by given id.
     */
    find: function (state, _getters, _rootState, rootGetters) { return function (id, wrap) {
        return rootGetters[state.$connection + "/find"](state.$name, id, wrap);
    }; }
};

var Actions = {
    /**
     * Save new data to the state. It will remove all existing data in the
     * state. If you want to keep existing data while saving new data,
     * use `insert` instead.
     */
    create: function (context, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var state, entity;
            return __generator(this, function (_a) {
                state = context.state;
                entity = state.$name;
                return [2 /*return*/, context.dispatch(state.$connection + "/create", __assign({ entity: entity }, payload), { root: true })];
            });
        });
    },
    /**
     * Insert given data to the state. Unlike `create`, this method will not
     * remove existing data within the state, but it will update the data
     * with the same primary key.
     */
    insert: function (context, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var state, entity;
            return __generator(this, function (_a) {
                state = context.state;
                entity = state.$name;
                return [2 /*return*/, context.dispatch(state.$connection + "/insert", __assign({ entity: entity }, payload), { root: true })];
            });
        });
    },
    /**
     * Update data in the store.
     */
    update: function (context, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var state, entity;
            return __generator(this, function (_a) {
                state = context.state;
                entity = state.$name;
                // If the payload is an array, then the payload should be an array of
                // data so let's pass the whole payload as data.
                if (Array.isArray(payload)) {
                    return [2 /*return*/, context.dispatch(state.$connection + "/update", { entity: entity, data: payload }, { root: true })];
                }
                // If the payload doesn't have `data` property, we'll assume that
                // the user has passed the object as the payload so let's define
                // the whole payload as a data.
                if (payload.data === undefined) {
                    return [2 /*return*/, context.dispatch(state.$connection + "/update", { entity: entity, data: payload }, { root: true })];
                }
                // Else destructure the payload and let root action handle it.
                return [2 /*return*/, context.dispatch(state.$connection + "/update", __assign({ entity: entity }, payload), { root: true })];
            });
        });
    },
    /**
     * Insert or update given data to the state. Unlike `insert`, this method
     * will not replace existing data within the state, but it will update only
     * the submitted data with the same primary key.
     */
    insertOrUpdate: function (context, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var state, entity;
            return __generator(this, function (_a) {
                state = context.state;
                entity = state.$name;
                return [2 /*return*/, context.dispatch(state.$connection + "/insertOrUpdate", __assign({ entity: entity }, payload), { root: true })];
            });
        });
    },
    /**
     * Delete data from the store.
     */
    delete: function (context, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var state, entity, where;
            return __generator(this, function (_a) {
                state = context.state;
                entity = state.$name;
                where = typeof payload === 'object' ? payload.where : payload;
                return [2 /*return*/, context.dispatch(state.$connection + "/delete", { entity: entity, where: where }, { root: true })];
            });
        });
    },
    /**
     * Delete all data from the store.
     */
    deleteAll: function (context) {
        return __awaiter(this, void 0, void 0, function () {
            var state, entity;
            return __generator(this, function (_a) {
                state = context.state;
                entity = state.$name;
                return [2 /*return*/, context.dispatch(state.$connection + "/deleteAll", { entity: entity }, { root: true })];
            });
        });
    }
};

var RootGetters = {
    /**
     * Create a new Query instance.
     */
    query: function (state) { return function (entity, wrap) {
        return Query.query(state, entity, wrap);
    }; },
    /**
     * Get all data of given entity.
     */
    all: function (state) { return function (entity, wrap) {
        return Query.all(state, entity, wrap);
    }; },
    /**
     * Find a data of the given entity by given id.
     */
    find: function (state) { return function (entity, id, wrap) {
        return Query.find(state, entity, id, wrap);
    }; }
};

var OptionsBuilder = /** @class */ (function () {
    function OptionsBuilder() {
    }
    /**
     * Get persist options from the given payload.
     */
    OptionsBuilder.createPersistOptions = function (payload) {
        return {
            create: payload.create,
            insert: payload.insert,
            update: payload.update,
            insertOrUpdate: payload.insertOrUpdate
        };
    };
    return OptionsBuilder;
}());

var RootActions = {
    /**
     * Save new data to the state. It will remove all existing data in the
     * state. If you want to keep existing data while saving new data,
     * use `insert` instead.
     */
    create: function (context, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var state, entity, data, options;
            return __generator(this, function (_a) {
                state = context.state;
                entity = payload.entity;
                data = payload.data;
                options = OptionsBuilder.createPersistOptions(payload);
                return [2 /*return*/, (new Query(state, entity)).setActionContext(context).create(data, options)];
            });
        });
    },
    /**
     * Insert given data to the state. Unlike `create`, this method will not
     * remove existing data within the state, but it will update the data
     * with the same primary key.
     */
    insert: function (context, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var state, entity, data, options;
            return __generator(this, function (_a) {
                state = context.state;
                entity = payload.entity;
                data = payload.data;
                options = OptionsBuilder.createPersistOptions(payload);
                return [2 /*return*/, (new Query(state, entity)).setActionContext(context).insert(data, options)];
            });
        });
    },
    /**
     * Update data in the store.
     */
    update: function (context, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var state, entity, data, where, options;
            return __generator(this, function (_a) {
                state = context.state;
                entity = payload.entity;
                data = payload.data;
                where = payload.where;
                options = OptionsBuilder.createPersistOptions(payload);
                return [2 /*return*/, (new Query(state, entity)).setActionContext(context).update(data, where, options)];
            });
        });
    },
    /**
     * Insert or update given data to the state. Unlike `insert`, this method
     * will not replace existing data within the state, but it will update only
     * the submitted data with the same primary key.
     */
    insertOrUpdate: function (context, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var state, entity, data, options;
            return __generator(this, function (_a) {
                state = context.state;
                entity = payload.entity;
                data = payload.data;
                options = OptionsBuilder.createPersistOptions(payload);
                return [2 /*return*/, (new Query(state, entity)).setActionContext(context).insertOrUpdate(data, options)];
            });
        });
    },
    /**
     * Delete data from the store.
     */
    delete: function (context, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var state, entity, where;
            return __generator(this, function (_a) {
                state = context.state;
                entity = payload.entity;
                where = payload.where;
                return [2 /*return*/, (new Query(state, entity)).setActionContext(context).delete(where)];
            });
        });
    },
    /**
     * Delete all data from the store.
     */
    deleteAll: function (context, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var entity;
            return __generator(this, function (_a) {
                entity = payload ? payload.entity : undefined;
                return [2 /*return*/, context.commit('deleteAll', { entity: entity })];
            });
        });
    }
};

var RootMutations = {
    /**
     * Save new data to the state. It will remove all existing data in the
     * state. If you want to keep existing data while saving new data,
     * use `insert` instead.
     */
    create: function (state, _a) {
        var entity = _a.entity, data = _a.data, create = _a.create, insert = _a.insert, update = _a.update, insertOrUpdate = _a.insertOrUpdate;
        Query.create(state, entity, data, { create: create, insert: insert, update: update, insertOrUpdate: insertOrUpdate });
    },
    /**
     * Commit `create` to the state.
     */
    commitCreate: function (state, _a) {
        var entity = _a.entity, data = _a.data;
        Query.commitCreate(state, entity, data);
    },
    /**
     * Insert given data to the state. Unlike `create`, this method will not
     * remove existing data within the state, but it will update the data
     * with the same primary key.
     */
    insert: function (state, _a) {
        var entity = _a.entity, data = _a.data, create = _a.create, insert = _a.insert, update = _a.update, insertOrUpdate = _a.insertOrUpdate;
        Query.insert(state, entity, data, { create: create, insert: insert, update: update, insertOrUpdate: insertOrUpdate });
    },
    /**
     * Commit `insert` to the state.
     */
    commitInsert: function (state, _a) {
        var entity = _a.entity, data = _a.data;
        Query.commitInsert(state, entity, data);
    },
    /**
     * Update data in the store.
     */
    update: function (state, _a) {
        var entity = _a.entity, data = _a.data, where = _a.where, create = _a.create, insert = _a.insert, update = _a.update, insertOrUpdate = _a.insertOrUpdate;
        Query.update(state, entity, data, where, { create: create, insert: insert, update: update, insertOrUpdate: insertOrUpdate });
    },
    /**
     * Commit `create` to the state.
     */
    commitUpdate: function (state, _a) {
        var entity = _a.entity, data = _a.data;
        Query.commitUpdate(state, entity, data);
    },
    /**
     * Insert or update given data to the state. Unlike `insert`, this method
     * will not replace existing data within the state, but it will update only
     * the submitted data with the same primary key.
     */
    insertOrUpdate: function (state, _a) {
        var entity = _a.entity, data = _a.data, create = _a.create;
        Query.insertOrUpdate(state, entity, data, create);
    },
    /**
     * Delete data from the store.
     */
    delete: function (state, _a) {
        var entity = _a.entity, where = _a.where;
        Query.delete(state, entity, where);
    },
    /**
     * Delete all data from the store.
     */
    deleteAll: function (state, payload) {
        if (payload && payload.entity) {
            Query.deleteAll(state, payload.entity);
            return;
        }
        Query.deleteAll(state);
    },
    /**
     * Commit `delete` to the state.
     */
    commitDelete: function (state, _a) {
        var entity = _a.entity, ids = _a.ids;
        Query.commitDelete(state, entity, ids);
    }
};

function use (plugin, options) {
    if (options === void 0) { options = {}; }
    var components = {
        Model: Model,
        Query: Query,
        Attribute: Attribute,
        Type: Type,
        Attr: Attr,
        String: String$1,
        Number: Number,
        Boolean: Boolean,
        Increment: Increment,
        Relation: Relation,
        HasOne: HasOne,
        BelongsTo: BelongsTo,
        HasMany: HasMany,
        HasManyBy: HasManyBy,
        BelongsToMany: BelongsToMany,
        HasManyThrough: HasManyThrough,
        MorphTo: MorphTo,
        MorphOne: MorphOne,
        MorphMany: MorphMany,
        MorphToMany: MorphToMany,
        MorphedByMany: MorphedByMany,
        Getters: Getters,
        Actions: Actions,
        RootGetters: RootGetters,
        RootActions: RootActions,
        RootMutations: RootMutations
    };
    plugin.install(components, options);
}

var NoKey = /** @class */ (function () {
    function NoKey() {
    }
    /**
     * Set new unique id value.
     */
    NoKey.set = function () {
        this.value = "" + this.prefix + this.count;
    };
    /**
     * Get the current unique id value.
     */
    NoKey.get = function () {
        return this.value;
    };
    /**
     * Increment the count, new unique id value.
     */
    NoKey.increment = function () {
        this.count++;
        this.set();
        return this.get();
    };
    /**
     * Count to create a unique id for the record that missing its primary key.
     */
    NoKey.count = 0;
    /**
     * Prefix string to be used for undefined primary key value.
     */
    NoKey.prefix = '_no_key_';
    /**
     * The current unique id value. This is the combination of
     * the `prefix` and the `count`.
     */
    NoKey.value = '';
    return NoKey;
}());

var IdAttribute = /** @class */ (function () {
    function IdAttribute() {
    }
    /**
     * Create the id attribute.
     */
    IdAttribute.create = function (model) {
        return function (value, _parent, _key) {
            var id = model.id(value);
            return id === undefined || id === null || id === '' ? NoKey.get() : id;
        };
    };
    return IdAttribute;
}());

var ProcessStrategy = /** @class */ (function () {
    function ProcessStrategy() {
    }
    /**
     * Create the process strategy.
     */
    ProcessStrategy.create = function (model) {
        var _this = this;
        return function (value, _parentValue, _key) {
            var id = _this.getId(model, value);
            return __assign({}, value, { $id: id });
        };
    };
    /**
     * Get the ID value for the given record.
     */
    ProcessStrategy.getId = function (model, value) {
        var id = model.id(value);
        return id === undefined || id === null || id === '' ? NoKey.increment() : id;
    };
    return ProcessStrategy;
}());

var Schema = /** @class */ (function () {
    /**
     * Create a new schema instance.
     */
    function Schema(model) {
        var _this = this;
        /**
         * List of generated schemas.
         */
        this.schemas = {};
        this.model = model;
        var models = model.database().models();
        Object.keys(models).forEach(function (name) { _this.one(models[name]); });
    }
    /**
     * Create a schema for the given model.
     */
    Schema.create = function (model) {
        return (new this(model)).one();
    };
    /**
     * Create a single schema for the given model.
     */
    Schema.prototype.one = function (model) {
        model = model || this.model;
        if (this.schemas[model.entity]) {
            return this.schemas[model.entity];
        }
        var schema$$1 = new src_3.Entity(model.entity, {}, {
            idAttribute: IdAttribute.create(model),
            processStrategy: ProcessStrategy.create(model)
        });
        this.schemas[model.entity] = schema$$1;
        var definition = this.definition(model);
        schema$$1.define(definition);
        return schema$$1;
    };
    /**
     * Create an array schema for the given model.
     */
    Schema.prototype.many = function (model) {
        return new src_3.Array(this.one(model));
    };
    /**
     * Create an union schema for the given model.
     */
    Schema.prototype.union = function (callback) {
        return new src_3.Union(this.schemas, callback);
    };
    /**
     * Create a dfinition for the given model.
     */
    Schema.prototype.definition = function (model) {
        var _this = this;
        var fields = model.fields();
        return Object.keys(fields).reduce(function (definition, key) {
            var field = fields[key];
            if (field instanceof Relation) {
                definition[key] = field.define(_this);
            }
            return definition;
        }, {});
    };
    return Schema;
}());

var Builder = /** @class */ (function () {
    function Builder() {
    }
    /**
     * Create module from the given modules.
     */
    Builder.create = function (namespace, modules) {
        var tree = {
            namespaced: true,
            state: { $name: namespace },
            getters: RootGetters,
            actions: RootActions,
            mutations: RootMutations,
            modules: {}
        };
        return this.createModules(tree, namespace, modules);
    };
    /**
     * Creates module tree to be registered under top level module
     * from the given entities.
     */
    Builder.createModules = function (tree, namespace, modules) {
        var _this = this;
        Object.keys(modules).forEach(function (name) {
            var module = modules[name];
            tree.modules[name] = { namespaced: true };
            tree.modules[name].state = _this.createState(namespace, name, module);
            tree.getters[name] = function (_state, getters, _rootState, _rootGetters) { return function () {
                return getters.query(name);
            }; };
            tree.modules[name].getters = __assign({}, Getters, module.getters);
            tree.modules[name].actions = __assign({}, Actions, module.actions);
            tree.modules[name].mutations = module.mutations || {};
        });
        return tree;
    };
    /**
     * Get new state to be registered to the modules.
     */
    Builder.createState = function (namespace, name, module) {
        var state = typeof module.state === 'function' ? module.state() : module.state;
        return __assign({}, state, { $connection: namespace, $name: name, data: {} });
    };
    return Builder;
}());

var Database = /** @class */ (function () {
    function Database() {
        /**
         * The list of entities to be registered to the Vuex Store. It contains
         * models and modules with its name.
         */
        this.entities = [];
        /**
         * The database schema definition. This schema will be used when normalizing
         * the data before persisting them to the Vuex Store.
         */
        this.schemas = {};
    }
    /**
     * Initialize the database before a user can start using it.
     */
    Database.prototype.start = function (store, namespace) {
        this.store = store;
        this.namespace = namespace;
        this.registerModules();
        this.createSchema();
    };
    /**
     * Register a model and module to the entities list.
     */
    Database.prototype.register = function (model, module) {
        this.entities.push({
            name: model.entity,
            model: model,
            module: module
        });
    };
    /**
     * Get the model of the given name from the entities list.
     */
    Database.prototype.model = function (name) {
        return this.models()[name];
    };
    /**
     * Get all models from the entities list.
     */
    Database.prototype.models = function () {
        return this.entities.reduce(function (models, entity) {
            models[entity.name] = entity.model;
            return models;
        }, {});
    };
    /**
     * Get the module of the given name from the entities list.
     */
    Database.prototype.module = function (name) {
        return this.modules()[name];
    };
    /**
     * Get all modules from the entities list.
     */
    Database.prototype.modules = function () {
        return this.entities.reduce(function (modules, entity) {
            modules[entity.name] = entity.module;
            return modules;
        }, {});
    };
    /**
     * Create the Vuex Module from registered entities.
     */
    Database.prototype.registerModules = function () {
        var modules = Builder.create(this.namespace, this.modules());
        this.store.registerModule(this.namespace, modules);
    };
    /**
     * Create the schema definition from registered entities list and set
     * it to the property. This schema will be used by the normalizer
     * to normalize data before persisting them to the Vuex Store.
     */
    Database.prototype.createSchema = function () {
        var _this = this;
        this.entities.forEach(function (entity) {
            _this.schemas[entity.name] = Schema.create(entity.model);
        });
    };
    return Database;
}());

var index$1 = {
    install: install,
    use: use,
    Database: Database,
    Model: Model,
    Query: Query,
    Attribute: Attribute,
    Type: Type,
    Attr: Attr,
    String: String$1,
    Number: Number,
    Boolean: Boolean,
    Increment: Increment,
    Relation: Relation,
    HasOne: HasOne,
    BelongsTo: BelongsTo,
    HasMany: HasMany,
    HasManyBy: HasManyBy,
    BelongsToMany: BelongsToMany,
    HasManyThrough: HasManyThrough,
    MorphTo: MorphTo,
    MorphOne: MorphOne,
    MorphMany: MorphMany,
    MorphToMany: MorphToMany,
    MorphedByMany: MorphedByMany,
    Getters: Getters,
    Actions: Actions,
    RootGetters: RootGetters,
    RootActions: RootActions,
    RootMutations: RootMutations
};

export default index$1;
export { install, use, Database, Model, Query, Attribute, Type, Attr, String$1 as String, Number, Boolean, Increment, Relation, HasOne, BelongsTo, HasMany, HasManyBy, BelongsToMany, HasManyThrough, MorphTo, MorphOne, MorphMany, MorphToMany, MorphedByMany, Getters, Actions, RootGetters, RootActions, RootMutations };
