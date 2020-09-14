<script>
export default {
  name: 'Logout',
  created() {
    // delete localStorage.token;
    // delete localStorage.meet;
    // delete localStorage.role;
    // delete localStorage.name;
    // delete localStorage.tipe;
    // delete localStorage.pass;
    // delete localStorage.provinsi;
    // delete localStorage.kabupaten;
    // delete localStorage.idUser;
    localStorage.clear()
    this.$router.push('/masuk');
  },
};
</script>