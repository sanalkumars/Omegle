import { express } from 'express';
import { http } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import connectDB from './db.js';
import { config } from './config/config.js';
import dotenv from 'dotenv';
import { socketController} from './controllers/socketController.js';



const app = express();

const server = http.createServer(app);

// Load environment variables from .env file
dotenv.config();


const io = new Server(server,{
    cors:{
        origin:'*',
    }
});

// calling the fiunction for connecting the database
connectDB();

app.use(cors());
app.use(express.json());

io.on('connection', socketController.js);


server.listen(config.PORT || 3000, () => {
    console.log(`Server is running on port ${config.PORT}`);
  });