/***
 * Service - A parent class or concrete component
 */

abstract class Service {
  public description!: string;

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}

/***
 * ServiceOption - A decoratorClass or decorator component 
 */

abstract class ServiceOption extends Service {
  decoratedService!: Service;
  public abstract getDescription(): string;
}

/***
 * Service - basic service packages
 */
class Photography extends Service {
  public description = "Photography Service Package";

  public cost(): number {
    return 200;
  }
}

class Videography extends Service {
  public description = "Photography Service Package";

  public cost(): number {
    return 300;
  }
}

/***
 * Service Options - A kind of addons
 */
class DroneShot extends ServiceOption {
  constructor(service: Service) {
    super();
    this.decoratedService = service;
  }

  public getDescription(): string {
    return this.decoratedService.getDescription() + ", Drone Shot";
  }

  public cost(): number {
    return this.decoratedService.cost() + 5000;
  }
}

class VisualEffects extends ServiceOption {
  constructor(service: Service) {
    super();
    this.decoratedService = service;
  }

  public getDescription(): string {
    return (
      this.decoratedService.getDescription() +
      ", Visual effects and Post-Production editing"
    );
  }

  public cost(): number {
    return this.decoratedService.cost() + 2500;
  }
}

class VenueDecoration extends ServiceOption {
  constructor(service: Service) {
    super();
    this.decoratedService = service;
  }

  public getDescription(): string {
    return this.decoratedService.getDescription() + ", Venue Decoration";
  }

  public cost(): number {
    return this.decoratedService.cost() + 800;
  }
}

class Choreographer extends ServiceOption {
  constructor(service: Service) {
    super();
    this.decoratedService = service;
  }

  public getDescription(): string {
    return this.decoratedService.getDescription() + ", Choreographer";
  }

  public cost(): number {
    return this.decoratedService.cost() + 300;
  }
}

/***
 * Calculate the service packages
 */
let weddingPhotoshoot = new Photography();
weddingPhotoshoot = new Choreographer(weddingPhotoshoot);
weddingPhotoshoot = new VenueDecoration(weddingPhotoshoot);
weddingPhotoshoot = new VisualEffects(weddingPhotoshoot);

console.log(`Wedding photoshoot cost : ${weddingPhotoshoot.cost()}`);
console.log(
  `Wedding photoshoot description : ${weddingPhotoshoot.getDescription()}`
);

let preWeddingVideo = new Videography();
preWeddingVideo = new DroneShot(preWeddingVideo);
preWeddingVideo = new Choreographer(preWeddingVideo);
preWeddingVideo = new VenueDecoration(preWeddingVideo);
preWeddingVideo = new VisualEffects(preWeddingVideo);

console.log(`Pre-wedding video cost : ${preWeddingVideo.cost()}`);
console.log(
  `Pre-wedding video description : ${preWeddingVideo.getDescription()}`
);
