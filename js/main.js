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

	}

};

