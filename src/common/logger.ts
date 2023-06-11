

export class Logger {

    private static getCurrentDate(): string {
        const now = new Date();
        const year = now.getFullYear(); // 获取当前年份
        const month = now.getMonth() + 1; // 获取当前月份（0-11，需要加 1 才是实际月份）
        const day = now.getDate(); // 获取当前日期（1-31）
        const hours = now.getHours(); // 获取当前小时数（0-23）
        const minutes = now.getMinutes(); // 获取当前分钟数（0-59）

        return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }


    public static debug(caller:string, message: string) {
        console.debug(`${this.getCurrentDate()} | [${caller}] | ${message}`)
    }

    public static info(caller:string, message: string) {
        console.info(`%c ${this.getCurrentDate()} | ${caller} | ${message}`, 'color: green')
    }

    public static log(caller:string, message: string) {
        console.log(`${this.getCurrentDate()} | ${caller} | ${message}`)
    }

    public static warn(caller:string, message: string) {
        console.warn(`${this.getCurrentDate()} | ${caller} | ${message}`)
    }

    public static error(caller:string, message: string) {
        console.error(`%c ${this.getCurrentDate()} | ${caller} | ${message}`, 'color: red')
    }
}