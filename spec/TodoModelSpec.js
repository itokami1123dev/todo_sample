describe ("TodoModel", function() {
	var todoModel;

	beforeEach(function() {
		todoModel = (new TodoModel()).initialize();
	});

	afterEach(function() {
		todoModel.destroy();
		todoModel = null;
	});

	describe ("#initializeメソッド", function() {
		it("初期化", function() {
			expect(todoModel).toBeDefined();
		});
	});

	describe ("#setNameメソッド", function() {
		it("名称の設定が出来る事",function(){
			todoModel.setName('テスト名称');
			var name = todoModel.getName();
			expect( name).toEqual('テスト名称');
		}); 
	});
	
	describe ("#setDone", function() {
		it("完了フラグの設定が出来る事",function(){
			todoModel.setDone(true);
			var done = todoModel.getDone();
			expect( done).toBeTruthy();
		}); 
	});

});
