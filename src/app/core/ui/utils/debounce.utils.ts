import { debounceTime, Subject } from 'rxjs';

export function debounceInput(delay = 300) {
  const subject = new Subject<string>();
  subject.pipe(debounceTime(delay)).subscribe(value => console.log('Processed:', value));
  return subject;
}

// searchDebounce = debounceInput(500);

// onSearchChange(value: string) {
//   this.searchDebounce.next(value);
// }
