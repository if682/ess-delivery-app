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
            jest.spyOn(Album, "create").mockImplementationOnce(()=>Promise.resolve({...JSON.parse(JSON.stringify(mockedAlbum)), save: () => {},songs:[]}
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

    });  
});