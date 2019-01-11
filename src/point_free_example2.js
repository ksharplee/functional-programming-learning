const R = require('ramda');

var data = {
  result: "SUCCESS",
  interfaceVersion: "1.0.3",
  requested: "10/17/2013 15:31:20",
  lastUpdated: "10/16/2013 10:52:39",
  tasks: [{
      id: 104,
      complete: false,
      priority: "high",
      dueDate: "2013-11-29",
      username: "Scott",
      title: "Do something",
      created: "9/22/2013"
    },
    {
      id: 105,
      complete: false,
      priority: "medium",
      dueDate: "2013-11-22",
      username: "Lena",
      title: "Do something else",
      created: "9/22/2013"
    },
    {
      id: 107,
      complete: true,
      priority: "high",
      dueDate: "2013-11-22",
      username: "Mike",
      title: "Fix the foo",
      created: "9/22/2013"
    },
    {
      id: 108,
      complete: false,
      priority: "low",
      dueDate: "2013-11-15",
      username: "Punam",
      title: "Adjust the bar",
      created: "9/25/2013"
    },
    {
      id: 110,
      complete: false,
      priority: "medium",
      dueDate: "2013-11-15",
      username: "Scott",
      title: "Rename everything",
      created: "10/2/2013"
    },
    {
      id: 112,
      complete: true,
      priority: "high",
      dueDate: "2013-11-27",
      username: "Lena",
      title: "Alter all quuxes",
      created: "10/5/2013"
    }
  ]
};

var fetchData = function () {
  return Promise.resolve(data);
};

// 提取 tasks 属性
let selectTasks = R.prop('tasks');

// 过滤出指定的用户
let filterMember = member => R.filter(
  R.propEq('username', member)
);

// 排除已经完成的任务
let excludeCompletedTasks = R.reject(R.propEq('complete', true));

// 选取指定属性
let selectFields = R.map(
  R.pick(['id', 'dueDate', 'title', 'priority'])
);

// 按照到期日期排序
let sortByDueDate = R.sortBy(
  R.prop('dueDate')
);

// 合成函数
let getIncompleteTaskSummaries = function(membername) {
  return fetchData().then(
    R.pipe(
      selectTasks,
      filterMember(membername),
      excludeCompletedTasks,
      selectFields,
      sortByDueDate
    )
  );
};

console.log(getIncompleteTaskSummaries('Scott'));