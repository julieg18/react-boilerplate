export default {
  isEmail(email) {
    return email && !!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email));
  },
};