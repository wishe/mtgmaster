export default {
  cards: state => state.cards,
  total: state => state.total,
  page: state => state.page,
  pages: state => Math.floor(state.total / 175),
  loading: state => state.loading,
  searching: state => state.searching,
  error: state => state.error
}
