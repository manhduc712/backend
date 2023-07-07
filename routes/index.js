import userRouter from './user.js';

const initRoutes = (app) => {
    app.use('/users', userRouter);
    app.use('/users', userRouter)
    app.use('/users', userRouter)
    app.use('/users', userRouter)
}

export default initRoutes;