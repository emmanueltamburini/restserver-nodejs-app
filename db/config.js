import mongoose from 'mongoose'

export const dbConnection = async () => {

    try {
        console.log('Trying to connect to bd');

        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Data base has connected');
    } catch (error) {
        console.log(error);
        throw new Error('There was a problem in data base connection')
    }
    
}