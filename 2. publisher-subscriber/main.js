//EventBus/ broker
class PubSub {
  constructor() {
    this.topics = new Map();
  }

  //subscribe to a topic
  subscribe(topic, callback) {
    if (!this.topics.has(topic)) {
      this.topics.set(topic, new Set());
    }
    this.topics.get(topic).add(callback);

    //return unsubscribe function
    return () => {
      this.topics.get(topic).delete(callback);
      if(this.topics.get(topic).size === 0) {
        this.topics.delete(topic);
      }
    };
  }
  //publish a topic
  publish(topic, data) {
    if(!this.topics.has(topic)) return;
     // Copy to prevent mutation issues during iteration
     [...this.topics.get(topic)].forEach(callback => {
        try {
            callback(data);
        } catch (error) {
            console.error(error);
        }
     })
  }
}

// ===== Usage Example =====

//Publisher
class OrderService {
    constructor(eventBus) {
        this.eventBus = eventBus;
    }
    placeOrder(orderId) {
        console.log(`Order Placed:, ${orderId}`);
        this.eventBus.publish("ORDER_PLACED", {orderId})
    }
}

//Subscriber
class EmailService {
    sendEmail(data) {
        console.log(`Email sent for order ${data.orderId}`);
    }
}

class AnalyticsService {
    track(data) {
        console.log(`Tracking order ${data.orderId}`);
    }
}




// ===== Run =====

const eventBus = new PubSub();

const orderService = new OrderService(eventBus);
const emailService = new EmailService();
const analyticsService = new AnalyticsService();

// Subscribe
const unsubscribeEmail = eventBus.subscribe(
  "ORDER_PLACED",
  emailService.sendEmail
);

eventBus.subscribe(
  "ORDER_PLACED",
  analyticsService.track
);

// Publish event
orderService.placeOrder("ORD-101");

// Unsubscribe email notifications
unsubscribeEmail();

// Publish again
orderService.placeOrder("ORD-102");
