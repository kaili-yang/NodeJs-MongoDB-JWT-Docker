const db = require('../config/database');

beforeAll(async () => {
    await db.sequelize.sync({ force: true });
});

test('create task', async () => {
    expect.assertions(1);
    const task = await db.Task.create({
        content: 'tesk task',
        status: 1,
        description: 'test description'
    });
    expect(task.id).toEqual(1);
});

test('get task', async () => {
    expect.assertions(2);
    const task = await db.Task.findByPk(1);
    expect(task.content).toEqual('tesk task');
    expect(task.status).toEqual(1);
    expect(task.description).toEqual('test description');
});

test('delete task', async () => {
    expect.assertions(1);
    await db.Task.destroy({
        where: {
         content: "tesk task"
        }
    });
    const task = await db.Task.findByPk("tesk task");
    expect(task).toBeNull();
});

afterAll(async () => {
    await db.sequelize.close();
});