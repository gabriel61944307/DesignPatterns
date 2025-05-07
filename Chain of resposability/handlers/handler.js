export class Handler {
    setNext(handler){
        this.next = handler;
        return handler;
    }

    handle(data, invalidData){
        if (this.next){
            return this.next.handle(data, invalidData);
        }

        return { success: true};
    }
}