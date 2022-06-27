import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/db';

export const Movie = sequelize.define('Movie', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.FLOAT
    },
    description: {
        type: DataTypes.TEXT
    },
    stars: {
        type: DataTypes.INTEGER
    },
    poster: {
        type: DataTypes.TEXT
    },
});
