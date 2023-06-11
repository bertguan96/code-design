import { Logger } from "./logger";

/**
 * 上下文管理
 */
export class Context {

    private static _context: Context;

    private constructor() {
    }

    public static init() {
        if (!this._context) {
            this._context = new Context();
        }
        Logger.info('Context', 'Context init success');
    }

    public static getInstance(): Context {
        if (!this._context) {
            this.init();
        }
        return this._context;
    }

}