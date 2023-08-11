<template>
  <div class="crypto-donation">
    <div class="wallet-list"></div>
    <div class="qr-code-list">
      <div
        v-for="wallet in walletAddresses"
        :key="wallet.name"
        class="qr-code-item"
      >
        <div class="wallet-label">{{ wallet.name.toUpperCase() }}</div>
        <div class="wallet-address">{{ wallet.wallet_address }}</div>
        <img
          :src="wallet.wallet_qrcode"
          :alt="wallet.wallet_address"
          :width="qrSize"
          :height="qrSize"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CryptoDonation',
  data() {
    return {
      qrSize: 200,
    }
  },
  computed: {
    walletAddresses: {
      get() {
        return this.$themeConfig.wallet_address
      },
      set(newWalletAddresses) {
        this.$themeConfig.wallet_address = newWalletAddresses
      },
    },
  },
}
</script>

<style lang="stylus" scoped>
.crypto-donation
  display flex
  justify-content center
  border-top 1px solid #ccc
  padding 20px 0
  text-align center

.wallet-list
  display flex
  flex-direction column
  margin-right 20px

.wallet-item
  display flex
  align-items center
  margin-bottom 10px

.wallet-label
  font-weight bold
  margin-right 10px

.wallet-address
  text-align left

.qr-code-list
  display flex
  flex-direction column

.qr-code-item
  display flex
  justify-content flex-end

.qr-code-item img
  margin-left 20px
</style>
