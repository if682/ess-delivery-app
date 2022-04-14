import * as fs from 'fs';

import { PromotionService } from './promotion-service';
import { UserService } from './user-service';

export function readFiles(adminService: PromotionService, usersService: UserService, restaurantsService: PromotionService[]){
    // Lendo dos arquivos
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
            for(var j of json){
                restaurantsService[j.name].coupons = j.coupons;
            }
        }
    })
}