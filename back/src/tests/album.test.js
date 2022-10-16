import mockingoose from 'mockingoose';
import supertest from 'supertest';
import { Artist } from '../models/artist';
import { Album } from '../models/album.js';
import { Song } from '../models/song.js';
import bcrypt from 'bcrypt';
import app from '../server';
import jestConfig from '../../jest.config';
import {jest} from "@jest/globals"

describe("ALBUM", ()=>{
    const mockedArtist = {
        _id: '507f191e810c19729de860ea',
        name: 'Nome do cara',
        email: 'name@email.com',
      };
      const mockedArtistPassword = '123456';
     
      let token;
      beforeAll(async () => {
        mockedArtist.password = await bcrypt.hash(mockedArtistPassword, 10);
        mockingoose(Artist).toReturn(mockedArtist, 'findOne');
        const resultsLogin = await supertest(app)
        .post('/auth/login')
        .send({
          email: mockedArtist.email,
          password: mockedArtistPassword
        });
        token = resultsLogin.body.token;
      });
    
      afterEach(() => {
        mockingoose.resetAll();
      });
    describe("POST /albums", ()=>{        
        test("Criar album, bem sucedido", async () => {
            const mockedAlbum = {
                _id: '507f191e810c19729de860ea',
                name: "Ao vivo no Recife",
                year: 2008,
                image: "https://i.redd.it/0ervpr0r2b681.jpg",
                artist: '507f191e810c19729de860ea',
                songs:[{
                    name: "Wonderwall",
                    url: "https://youtu.be/6hzrDeceEKc",
                    participation: "",
                    explicit: false
    
                },{
                    name: "Monkey Rap",
                    url: "https//youtu.be/hKqaxl2nqGI",
                    participation: "Wesley Safadão",
                    explicit: true
                }],
          };
            jest.spyOn(Album, "create").mockImplementationOnce(()=>
            Promise.resolve({...JSON.parse(JSON.stringify(mockedAlbum)), save: () => {},songs:[]}
            ));
            const results = await supertest(app).post('/albums').send(mockedAlbum).set('Authorization', 'Bearer ' + token);
            expect(results.statusCode).toBe(200);
            expect(results.body.album.name).toBe(mockedAlbum.name);
            expect(results.body.album.year).toBe(mockedAlbum.year);
            expect(results.body.album.image).toBe(mockedAlbum.image);
            expect(Array.isArray(results.body.album.songs)).toBe(true);
            const songsReceived = results.body.album.songs.map(song=>{
                const {name,url,participation,explicit} = song
                return {name,url,participation,explicit};
            })
            expect(songsReceived).toHaveLength(mockedAlbum.songs.length);
            for(let i in songsReceived)
                expect(songsReceived[i]).toEqual(mockedAlbum.songs[i]);
        });
        test("Falha na criação de album, já existe", async()=>{
            const mockedAlbumCreated = {
                _id: '507f191e810c19729de860ea',
                name: "Ao vivo no Recife",
                year: 2008,
                image: "https://i.redd.it/0ervpr0r2b681.jpg",
                artist: '507f191e810c19729de860ea',
                songs:[{
                    name: "Wonderwall",
                    url: "https://youtu.be/6hzrDeceEKc",
                    participation: "",
                    explicit: false
        
                },{
                    name: "Monkey Rap",
                    url: "https//youtu.be/hKqaxl2nqGI",
                    participation: "Wesley Safadão",
                    explicit: true
                }],
              };
            const mockedAlbumBody = {
                name: "Ao vivo no Recife",
                year: 2007,
                artist: '507f191e810c19729de860ea',
                songs:[{
                    name: "Master of puppets",
                    url: "https//www.youtube.com/watch?v=6POZlJAZsok",
                    participation: "",
                    explicit: false
        
                }],
              }; 
              mockingoose(Album).toReturn(mockedAlbumCreated, 'findOne');
              const results = await supertest(app).post('/albums').send(mockedAlbumBody).set('Authorization', 'Bearer ' + token);
              expect(results.statusCode).toBe(400);
              expect(results.body.error).toBe('Album already exists');  
        });
        test("Falha na criação de album, campo de música vazio",async()=>{
            const mockedAlbum = {
                _id: '507f191e810c19729de860ea',
                name: "Ao vivo no Recife",
                year: 2008,
                image: "https://i.redd.it/0ervpr0r2b681.jpg",
                artist: '507f191e810c19729de860ea',
                songs:[],
            };
            const results = await supertest(app).post('/albums').send(mockedAlbum).set('Authorization', 'Bearer ' + token);
            expect(results.statusCode).toBe(400);
            expect(results.body.error).toBe('A album needs a song');
        });
        test("Falha na criação de album, falta campos obrigatórios em músicas",async()=>{
            const mockedAlbum = {
                _id: '507f191e810c19729de860ea',
                name: "Ao vivo no Recife",
                year: 2008,
                image: "https://i.redd.it/0ervpr0r2b681.jpg",
                artist: '507f191e810c19729de860ea',
                songs:[{
                    name: "Wonderwall",
                    url: "https://youtu.be/6hzrDeceEKc",
                    participation: "",
                    explicit: false
    
                },{
                    participation: "Wesley Safadão",
                    explicit: true
                }],
            };
            const results = await supertest(app).post('/albums').send(mockedAlbum).set('Authorization', 'Bearer ' + token);
            expect(results.statusCode).toBe(400);
            expect(results.body.error).toBe('A song is missing required an argument');
        });
    });  
    describe("PUT /albums/:albumId",()=>{
        const mockedAlbumCreated = {
            _id: '507f191e810c19729de860ea',
            name: "Ao vivo no Recife",
            year: 2008,
            image: "https://i.redd.it/0ervpr0r2b681.jpg",
            artist: '507f191e810c19729de860ea',
            songs:[{
                name: "Wonderwall",
                url: "https://youtu.be/6hzrDeceEKc",
                participation: "",
                explicit: false
    
            },{
                name: "Monkey Rap",
                url: "https//youtu.be/hKqaxl2nqGI",
                participation: "Wesley Safadão",
                explicit: true
            }],
          };
        test("falha ao editar album, album não existe",async()=>{
            mockingoose(Album).toReturn(false, 'findOne');
            const results = await supertest(app).put('/albums/'+mockedAlbumCreated._id).send().set('Authorization', 'Bearer ' + token);
            expect(results.statusCode).toBe(404);
            expect(results.body.message).toBe("Could not find the album");    
        });
        test("falha ao editar album, nome já existe",async()=>{
            mockingoose(Album).toReturn({...mockedAlbumCreated,_id:"diferente"}, 'findOne');
            const results = await supertest(app).put('/albums/'+mockedAlbumCreated._id).send().set('Authorization', 'Bearer ' + token);
            expect(results.statusCode).toBe(400);
            expect(results.body.error).toBe('Album name already exists');    
        });        
        test("falha ao editar album, lista de músicas vazia",async()=>{
            mockingoose(Album).toReturn(mockedAlbumCreated, 'findOne');
            const results = await supertest(app).put('/albums/'+mockedAlbumCreated._id).send({...mockedAlbumCreated,songs:[]}).set('Authorization', 'Bearer ' + token);
            expect(results.statusCode).toBe(400);
            expect(results.body.error).toBe('A album needs a song');    
        });
        test("editar album, sucesso",async()=>{
            const mockedAlbumEdited = {
                _id: '507f191e810c19729de860ea',
                name: "Ah eh",
                year: 2020,
                image: "https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F001%2F472%2F186%2F337.jpg",
                artist: '507f191e810c19729de860ea',
                songs:[{
                    name: "Banjo Boy",
                    url: "https//youtu.be/2C3m5Lno_20",
                    participation: "",
                    explicit: false
        
                },{
                    name: "Monkey Rap",
                    url: "https//youtu.be/hKqaxl2nqGI",
                    participation: "",
                    explicit: true
                },{
                    name: "Despacito 2",
                    url: "https://youtu.be/m3lSLLklu7Q",
                    participation: "Wesley Safadão",
                    explicit: true
                }],
              };
            mockingoose(Album).toReturn(mockedAlbumCreated, 'findOne');
            jest.spyOn(Album, "updateOne").mockImplementationOnce(()=>
            Promise.resolve({...JSON.parse(JSON.stringify(mockedAlbumEdited))}
            ));
            const results = await supertest(app).put('/albums/'+mockedAlbumCreated._id).send(mockedAlbumEdited).set('Authorization', 'Bearer ' + token);
            expect(results.statusCode).toBe(200);
            expect(results.body.name).toBe(mockedAlbumEdited.name);
            expect(results.body.year).toBe(mockedAlbumEdited.year);
            expect(results.body.image).toBe(mockedAlbumEdited.image);
            expect(Array.isArray(results.body.songs)).toBe(true);
            const songsReceived = results.body.songs.map(song=>{
                const {name,url,participation,explicit} = song
                return {name,url,participation,explicit};
            })
            expect(songsReceived).toHaveLength(mockedAlbumEdited.songs.length);
            for(let i in songsReceived)
                expect(songsReceived[i]).toEqual(mockedAlbumEdited.songs[i]);
        });
    });
});