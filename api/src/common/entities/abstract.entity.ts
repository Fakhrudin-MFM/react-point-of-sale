export abstract class AbstractEntity<T> {
  abstract dtoClass: new (entity: AbstractEntity<any>, options?: any) => T;

  toDto(options?: any): T {
    return new this.dtoClass(this, options);
  }
}
