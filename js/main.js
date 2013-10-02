// 
//  **       **
//  ****   ****
//  ** ** ** **
//  **  ***  **
//

/**
* Todoモデル情報クラス
*
* @class TodoModel
* @constructor
*/
var TodoModel = function(){
	
	/**
	* Todo名称
	* @property name
	* @type {String}
	* @default ""
	*/
	this.name = "";

	/**
	* Todo完了フラグ
	* @property done
	* @type {Boolean}
	* @default false
	*/
	this.done = false;

};

TodoModel.prototype = {
	constructor: TodoModel,

	/**
	* 初期化メソッド
	* @method initialize
	* @return {TodoModel}
	*/
	initialize: function(){
		return this;
	},
	
	/**
	* 名称設定メソッド
	* @method setName
	* @param {String} name
	*/
	setName: function(name){
		this.name = name;
	},
	
	/**
	* 名称取得メソッド
	* @method getName
	* @return {String} 
	*/
	getName: function(){
		return this.name;
	},
	
	/**
	* 完了フラグ設定メソッド
	* @method setDone
	* @param {Boolean} done
	*/
	setDone: function(done){
		this.done = done;
	},
	
	/**
	* 完了フラグ取得メソッド
	* @method getDone
	* @return {Boolean} 
	*/
	getDone: function(){
		return this.done;
	},

	/**
	* 破棄処理
	*/
	destroy: function(){
		this.name = null;
	}

};





/**
* TodoListモデル情報クラス
* @class TodoListModel
* @constructor
*/
var TodoListModel = function(){
	
	/**
	* Todo情報一覧の格納
	* @property todoList
	* @type {Array}
	* @default []
	*/
	this.todoList = [];


};

TodoListModel.prototype = {
	constructor: TodoListModel,

	/**
	* 初期化メソッド
	* @method initialize
	* @return {TodoModel}
	*/
	initialize: function(){
		return this;
	},
	
	/**
	* TodoModel追加メソッド
	* Todo情報一覧にTodoを追加
	* @method addTodoModel
	* @param {TodoModel} todoModel
	* @return {Number} 
	*/
	addTodoModel: function( todoModel){
		this.todoList.push( todoModel);
		var idx = this.todoList.length - 1;
		return idx;

	},

	
	/**
	* TodoModel取得メソッド
	* @method getTodoModel
	* @param {Number} idx
	* @return {TodoModel}
	*/
	getTodoModel: function( idx){
		return this.todoList[idx];
	},
	
	/**
	* TodoModel格納数取得メソッド
	* @method getSize
	* @return {Number}
	*/
	getSize: function( ){
		return this.todoList.length;
	},

	/**
	* Todo情報のクリア
	* @method clearModel
	*/
	clearModel: function(){
		for ( var i=0,len=this.todoList.length; i<len; i++){
			var todo = this.todoList.pop();
			todo.destroy();
		}

	},


	/**
	* 破棄処理
	*/
	destroy: function(){
		this.clearModel();
	}


};



