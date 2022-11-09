export function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype = {
  constructor: Rectangle,

  getArea() {
    return this.width * this.height;
  },
};

export function getJSON(obj: object): string {
  return JSON.stringify(obj);
}

export function fromJSON(proto, json) {
  const args = Object.values(JSON.parse(json));

  return new proto.constructor(...args);
}

// prettier-ignore
type Selector = 'element' | 'id' | 'class' | 'attr' | 'pseudoClass' | 'pseudoElement';
type Combinator = ',' | ' ' | '>' | '~' | '+';

const selectorSpecification: Record<
  Selector,
  { unique: boolean; level: number; template: string }
> = {
  element: { unique: true, level: 1, template: '{{value}}' },
  id: { unique: true, level: 2, template: '#{{value}}' },
  class: { unique: false, level: 3, template: '.{{value}}' },
  attr: { unique: false, level: 4, template: '[{{value}}]' },
  pseudoClass: { unique: false, level: 5, template: ':{{value}}' },
  pseudoElement: { unique: true, level: 6, template: '::{{value}}' },
} as const;

class CompoundSelector
  implements Record<Selector, (value: string) => CompoundSelector>
{
  protected currentSelector: Selector | '';
  private compoundSelector: string;

  constructor() {
    this.currentSelector = '';
    this.compoundSelector = '';
  }

  element(value: string): this {
    return this.add('element', value);
  }

  id(value: string): this {
    return this.add('id', value);
  }

  class(value: string): this {
    return this.add('class', value);
  }

  attr(value: string): this {
    return this.add('attr', value);
  }

  pseudoClass(value: string): this {
    return this.add('pseudoClass', value);
  }

  pseudoElement(value: string): this {
    return this.add('pseudoElement', value);
  }

  combine(
    compoundSelector1: CompoundSelector,
    combinator: Combinator,
    compoundSelector2: CompoundSelector
  ): this {
    this.currentSelector = compoundSelector2.currentSelector;
    this.compoundSelector = `${compoundSelector1.stringify()} ${combinator} ${compoundSelector2.stringify()}`;

    return this;
  }

  stringify(): string {
    const result = this.compoundSelector;

    this.currentSelector = '';
    this.compoundSelector = '';

    return result;
  }

  /** @throws {Error} */
  private check(selector: Selector): void {
    if (this.currentSelector === '') {
      return;
    }

    const { level: currentLevel } = selectorSpecification[this.currentSelector];

    if (currentLevel > selectorSpecification[selector].level) {
      throw new Error(
        'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element'
      );
    }

    if (
      currentLevel === selectorSpecification[selector].level &&
      selectorSpecification[selector].unique
    ) {
      throw new Error(
        'Element, id and pseudo-element should not occur more then one time inside the selector'
      );
    }
  }

  private add(selector: Selector, value: string): this {
    this.check(selector);

    this.currentSelector = selector;
    this.compoundSelector += selectorSpecification[
      this.currentSelector
    ].template.replace('{{value}}', value);

    return this;
  }
}

export const cssSelectorBuilder = {
  element(value: string): CompoundSelector {
    return new CompoundSelector().element(value);
  },

  id(value: string): CompoundSelector {
    return new CompoundSelector().id(value);
  },

  class(value: string): CompoundSelector {
    return new CompoundSelector().class(value);
  },

  attr(value: string): CompoundSelector {
    return new CompoundSelector().attr(value);
  },

  pseudoClass(value: string): CompoundSelector {
    return new CompoundSelector().pseudoClass(value);
  },

  pseudoElement(value: string): CompoundSelector {
    return new CompoundSelector().pseudoElement(value);
  },

  combine(
    selector1: CompoundSelector,
    combinator: Combinator,
    selector2: CompoundSelector
  ): CompoundSelector {
    return new CompoundSelector().combine(selector1, combinator, selector2);
  },
};
