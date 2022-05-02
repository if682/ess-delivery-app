import * as fs from 'fs';

import { PromotionService } from './promotion-service';
import { UserService } from './user-service';
import { restaurant } from './restaurants';
import { Admin } from './users';
export var restaurants: restaurant[] = [];

export function readFiles(adminService: PromotionService, usersService: UserService, restaurantsService: PromotionService[]) : [PromotionService, UserService, PromotionService[]] {
    // Lendo dos arquivos
    /*fs.readFile("admin.json", "utf-8", (err,data)=> {
        if(err){
            console.log(err);
        }
        else{
            admins = JSON.parse(data);
            console.log(admins);
        }
    })*/

    fs.readFile("admin-coupons.json", "utf-8", (err, data) => {
        if(err){
            console.log(err);
        }else{
            adminService.coupons = JSON.parse(data);
        }
    })
  
    fs.readFile("users.json", "utf-8", (err, data) => {
        if(err){
            console.log(err);
        }else{
            usersService.users = JSON.parse(data);
        }
    })
  
    fs.readFile("restaurants-coupons.json", "utf-8", (err, data) => {
        if(err){
            console.log(err);
        }else{
            var json = JSON.parse(data);
            restaurants = json;
            for(var r of restaurants){
                restaurantsService[r.name] = new PromotionService();
                restaurantsService[r.name].coupons = r.coupons;
            }
        }
    })
    return [adminService, usersService, restaurantsService];
}