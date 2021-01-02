import { Injectable } from '@nestjs/common';
import {JwtService} from "@nestjs/jwt";
import {User} from "../../../user/user/models/user.interface";
import {from, Observable, of} from "rxjs";
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private  readonly  jwtService: JwtService) {}

    generateJWT(user: User): Observable<string> {
        return from(this.jwtService.signAsync({user}));
    }

    hashPassword(password: string): Observable<string> {
        return from<string>(bcrypt.hash(password, 12));
    };

    comparePasswords(newPassword: string, passwordHash: string): Observable<any> {
        return of<any | boolean>(bcrypt.compare(newPassword, passwordHash));
    };
}
