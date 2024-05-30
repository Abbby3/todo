const query = "http://localhost:8080/tasks";

// createTask;
export const createTask = async (taskData: object) => {
  const requestOptions: RequestInit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(taskData),
  };
  const response = await fetch(query, requestOptions);
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(`Error ${response.status}`);
  }
};

// getAllTasks;
export const getAllTasks = async () => {
  const response = await fetch(query);
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(`Error ${response.status}`);
  }
};

// getTaskById;
export const getTaskById = async (id: string) => {
  const newQuery = query + '/' + id;
  const response = await fetch(newQuery);
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(`Error ${response.status}`);
  }
}

// updateTask;
export const updateTask = async (id: string, updatedTaskData: object) => {
  const newQuery = query + '/' + id;
  const requestOptions: RequestInit = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedTaskData)
  };
  const response = await fetch(newQuery, requestOptions);
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(`Error ${response.status}`);
  }
};

// deleteTask;
export const deleteTask = async (id: string) => {
  const newQuery = query + '/' + id;
  const requestOptions: RequestInit = {
    method: 'DELETE',
  };
  const response = await fetch(newQuery, requestOptions);
  if (response.ok) {
    return 'Task deleted successfully';
  } else {
    throw new Error(`Error ${response.status}`);
  }
};
