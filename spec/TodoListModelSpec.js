describe ("TodoListModel", function() {
	var todoListModel;

	beforeEach(function() {
		todoListModel = (new TodoListModel()).initialize();
	});

	afterEach(function() {
		todoListModel.destroy();
		todoListModel = null;
	});

	describe ("#initializeメソッド", function() {
		it("初期化", function(){
			expect(todoListModel).toBeDefined();
		});
	});

	describe ("#addTodoModelメソッド", function() {
		it("Todo情報一覧にTodoを追加出来る事",function(){

			var beforeSize = todoListModel.getSize(); 

			var todo = (new TodoModel()).initialize();

			todoListModel.addTodoModel(todo);

			var afterSize = todoListModel.getSize();

			expect( afterSize).toEqual( beforeSize+ 1);


		});
	});

	describe ("#getTodoModelメソッド", function() {
		it("Todo情報一覧からTodoを取得出来る事", function() {

			var todo = (new TodoModel()).initialize();

			todo.setName('テストTODO');

			var idx = todoListModel.addTodoModel(todo);
			
			expect( todoListModel.getTodoModel(idx) ).toEqual( todo);

		});
	});
	
	describe ("#clearModelメソッド", function() {

		it("Todo情報一覧のクリア",function(){

			todoListModel.addTodoModel(new TodoModel().initialize());
			todoListModel.addTodoModel(new TodoModel().initialize());
			
			expect(todoListModel.getSize()).toEqual(2);

			todoListModel.clearModel();
			
			expect(todoListModel.getSize()).toEqual(0);

		});

	});

    
});

