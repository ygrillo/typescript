interface IPerson {
    id: number
    sayMyName(): string
}

class AnyPerson implements IPerson {
    readonly id: number // impede que seja alterado
    protected name: string // impede que seja acessado fora da classe e da subclasse
    private age: number // impede que uma subclasse acesse

    constructor(id: number, name: string, age: number) {
        this.id = id
        this.name = name
        this.age = age
    }

    sayMyName(): string {
        return this.name
    }

    updateId(): void {
        this.id = 4 // impede que seja alterado até mesmo dentro da própria classe
    }
}

class Employee extends AnyPerson {
    constructor(id: number, name: string, age: number) {
        super(id, name, age)
    }

    whoAmI() {
        return this.age // não consegue acessar pois está "private"
    }
}
