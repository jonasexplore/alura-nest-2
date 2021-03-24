import { Module, ClassSerializerInterceptor } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { APP_INTERCEPTOR, APP_FILTER } from '@nestjs/core';
import { FitroDeExcecaoHttp } from './common/filtros/filtro-de-excecao-http.filter';
import { TranformaRespostaInterceptor } from './core/http/transforma-resposta.interceptor';

@Module({
  imports: [UsuarioModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: FitroDeExcecaoHttp,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TranformaRespostaInterceptor,
    },
  ],
})
export class AppModule {}
