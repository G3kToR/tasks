export class Task {

    constructor(
        public name: string,
        public desk: string,
        public date: number, // В unixTime
        public priority: number,
        public plannedTime: number, // В минутах
        public elapsedTime: number, // В минутах
        public status: number,
        public id: number = 0

    ) { }

    public getDate(): string { // Возвращает дату сообщения
        const result: Date = new Date(this.date);
        const minutes: string = (
            (result.getMinutes() < 10) ? '0'+result.getMinutes() : result.getMinutes()
        ).toString();
        return ((result.getDate() < 10) ? '0'+result.getDate() : result.getDate())+
            '.'+('0' + (result.getMonth() + 1))+' в '+result.getHours()+':'+minutes;
    }
}