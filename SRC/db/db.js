import { MongoClient } from "mongodb";

const DB_Name = 'my-database';

export const db = {

    _dbClient: null,
    connect: async function(url) {
        const client = await MongoClient.connect(url, {
            maxPoolSize: 10,
           // useNewUrlParser: true,  
            //useUnifiedTopology: true,
        });

         
        this._dbClient = client;
        
    },
    getConnection: function(){
        if(!this._dbclient){
            console.log('you need to call connect function first');
            process.exit(1);
        }

        return this._dbclient.db(DB_Name)
    }
}