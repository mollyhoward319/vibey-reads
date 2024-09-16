import express from 'express';
import sequelize from '';
// import routes from '';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Force true to drop/recreate table(s) on every sync
// when we deploay turn force:false. to drop and create new tables we want to switch it to true to fix the bugs in our tables
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
});

// activity 14.03.