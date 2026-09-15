export class Recipe {
  _name!: string;
  _category?: string;
  _desc?: string;
  _time?: number;

  constructor(aName: string) {
    this.name = aName;
  }

  get name(): string {
    return this._name;
  }

  set name(aName: string) {
    const trimmed = aName.trim();
    if (trimmed.length === 0) {
      throw new Error("El nombre de la receta no puede ser vacío.");
    }
    this._name = trimmed;
  }

  get category(): string | undefined {
    return this._category;
  }
  get desc(): string | undefined {
    return this._desc;
  }
  set desc(aDesc: string) {
    this._desc = aDesc;
  }

  set category(aCategory: string) {
    this._category = aCategory;
  }
  get time(): number | undefined {
    return this._time;
  }
  set time(aTime: number) {
    this._time = aTime;
  }
  toString(): string {
    return `Receta: ${this.name} - categoría: ${this.category} - descripción: ${this.desc} - Tiempo: ${this.time} minutos`;
  }
}
