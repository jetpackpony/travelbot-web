export default function getServerURL() {
  const protocol = document.location.protocol === "https:" ? "wss" : "ws";
  switch(process.env.NODE_ENV) {
    case 'production':
      return `${protocol}://travelobot.herokuapp.com/`;
    default:
      return `${protocol}://localhost:5000/`;
  }
}
