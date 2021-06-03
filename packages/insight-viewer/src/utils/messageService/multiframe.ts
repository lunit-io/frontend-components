import { Observable, Subject } from 'rxjs'

const subject = new Subject<number>()

export const multiframeMessage = {
  sendMessage: (message: number): void => subject.next(message),
  getMessage: (): Observable<number> => subject.asObservable(),
}
