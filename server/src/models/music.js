import { Sequelize, Model, Optional} from 'sequelize';

class Music extends Model{
   export function Music(sequelize) {
    Music.init(
            {
                playlist_id: {
                    type: dataTypes.STRING,
                    primaryKey: true,
                    }, 
                playlist_name: {
                    type: dataTypes.STRING,
                    },
                playlist_description: {
                    type: dataTypes.STRING,
                    },
                playlist_images: {
                    type: dataTypes.STRING,
                    },
                playlist_owner: {
                    type: dataTypes.OBJECT,
                    },
                playlist_owner_externals_urls: {
                    type: dataTypes.OBJECT,
                    },
                playlist_tracks: {
                    type: dataTypes.OBJECT,  
                },
                recommendations_limit: {
                    type: dataTypes.INTEGER,
                }, 
                recommendations_seed_genres: {
                    type: dataTypes.STRING,
                },
                recommendations_seed_artists: {
                    type: dataTypes.STRING,
                },
                recommendations_seed_tracks: {
                    type: dataTypes.STRING,
                }, 
                recommendations_min_acousticness: {
                    type: dataTypes.NUMBER,
                }, 
                recommendations_max_acousticness: {
                    type: dataTypes.NUMBER,
                }, 
                recommendations_target_acousticness: {
                    type: dataTypes.NUMBER,
                }, 
                recommendations_min_danceability: {
                    type: dataTypes.NUMBER,
                },
                recommendations_max_danceability: {
                    type: dataTypes.NUMBER,
                }, 
                recommendations_target_danceability: {
                    type: dataTypes.NUMBER,
                }, 
                recommendations_min_duration_ms: {
                    type: dataTypes.INTGER,
                }, 
                recommendations_max_duration_ms: {
                    type: dataTypes.INTEGER,
                }, 
                recommendations_target_duration_ms: {
                    type: dataTypes.INTEGER,
                }, 
                recommendations_min_energy: {
                    type: dataTypes.NUMBER,
                }, 
                recommendations_max_energy: {
                    type: dataTypes.NUMBER,
                }, 
                recommendations_target_energy: {
                    type: dataTypes.NUMBER,
                }, 
                recommendations_min_instrumentalness: {
                    type: dataTypes.NUMBER,
                }, 
                recommendations_max_instrumentalness: {
                    type: dataTypes.NUMBER,
                }, 
                recommendations_target_instrumentalness: {
                    type: dataTypes.NUMBER,
                }, 
                recommendations_min_key: {
                    type: dataTypes.INTEGER,
                }, 
                recommendations_target_key: {
                    type: dataTypes.INTEGER,
                }, 
                recommendations_min_loudness: {
                    type: dataTypes.NUMBER,
                }, 
                recommendations_max_loudness: {
                    type: dataTypes.NUMBER,
                }, 
                recommendations_target_loudness: {
                    type: dataTypes.NUMBER,
                }, 
                recommendations_min_popularity: {
                    type: dataTypes.INTEGER,
                }, 
                recommendations_max_popularity: {
                    type: dataTypes.INTEGER,
                },
                },
    )
}
        {
sequelize, 
timestamps: false,
underscored: true,
freezeTableName: true,
};

return Music;
}