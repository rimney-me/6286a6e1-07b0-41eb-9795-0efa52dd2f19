import { KeycloakConnectModule, ResourceGuard, RoleGuard, AuthGuard } from 'nest-keycloak-connect';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [KeycloakConnectModule.register({
                            authServerUrl: process.env.AUTH_SERVER_URL,
                            realm: process.env.KEYCLOAK_REALM,  
                            clientId: process.env.KEYCLOAK_CLIENT_ID,
                            secret: process.env.KEYCLOAK_SECRET_KEY
                        })],
  controllers: [],
  providers: [],
})
export class AppModule {}
       clientId: process.env.KEYCLOAK_CLIENT_ID,
                            secret: process.env.KEYCLOAK_SECRET_KEY
                        })],
  controllers: [],
  providers: [],
})
export class AppModule {}
