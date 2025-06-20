/**
 * やることリスト
 * title: やることのタイトル
 * isDone: 達成状況　trueになると、チェックが着く
 */
let tasks = [
    { title: "お洗濯", isDone: false },
]

/**
 * [学生1]
 * 引数で与えられるタイトルで「やること」が作成されるように修正してください。
 * 
 * 注) 登録ボタンを押したときに、この関数が呼ばれる処理は既に書かれています。
 * 
 */
function addTask(title) {
    // 修正箇所: 引数で受け取った 'title' をそのまま使用する
    const newTask = {
        title: title, // ここを引数の 'title' に変更
        isDone: false,
    };
    tasks.push(newTask);
    drawTask(newTask, tasks.length - 1);
}

function onUpdateIsDone(task) {
    return { ...task, isDone: !task.isDone };
}

function onTaskTitleClicked(task) {
    // 必要に応じてタスククリック時の処理を実装
    return { ...task, isDone: !task.isDone }; // 例: クリックで完了状態を切り替える
}

/**
 * [学生2]
 * 「チェックボックス」をクリックしたときに、
 * 引数で与えられる「やること」の達成状態(isDone)を、
 * 現在の状態と反対になるように更新してください。
 * 
 * 注) クリックしたときに、この関数が呼ばれる処理は既に書かれています。
 * 
 * 例:
 * before   |   after
 * --------------------
 * true     |   false
 * false    |   true
 */
function onUpdateIsDone(task) {
    console.log("チェックボックスがクリックされました。", task);

    // 達成状態を更新(このままだと、現在の達成状態で更新されてしまう！)
    const currentValue = task.isDone;
    task.isDone = currentValue;

    return task;
}

/**
 * [学生3]
 * 「タスクのタイトル」をクリックしたときに、
 * 引数で与えられる「やること」の達成状態(isDone)を、
 * 現在の状態と反対になるように更新してください。
 * 
 * 注) クリックしたときに、この関数が呼ばれる処理は既に書かれています。
 * 
 * 例:
 * before   |   after
 * --------------------
 * true     |   false
 * false    |   true
 */
function onTaskTitleClicked(task) {
    console.log("タイトルがクリックされました。", task);

    // 達成状態を更新(このままだと、現在の達成状態で更新されてしまう！)
    const currentValue = task.isDone;
    task.isDone = currentValue;

    return task;
}