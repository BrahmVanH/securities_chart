"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const server_1 = require("./bundle/server");
const handler = (event, context) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('event: ', event);
        console.log('context: ', context);
        const server = (0, server_1.createLambdaServer)();
        const result = new Promise((resolve, reject) => {
            const cb = (err, args) => (err ? reject(err) : resolve(args));
            server.createHandler()(event, context, cb);
        });
        console.log('result: ', result);
        return result;
        // const cb = (error: string | Error | null | undefined, args: any) =>
        //  {
        // 	if (error) {
        // 		console.error('error in handler: ', error);
        // 		reject(error);
        // 	} else {
        // 		resolve(args);
        // 		server.createHandler()(event, context, cb);
        // 	}
        // };
    }
    catch (error) {
        console.error('error in handler: ', error);
        throw error;
    }
});
exports.handler = handler;
//# sourceMappingURL=graphql.js.map