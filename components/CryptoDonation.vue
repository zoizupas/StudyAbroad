<template>
  <div class="crypto-donation">
    <div class="qr-code-list">
      <div class="qr-code-row">
        <div
          v-for="wallet in walletAddresses"
          :key="wallet.name"
          class="qr-code-item"
        >
          <div class="qr-code-wrapper">
            <img
              :src="wallet.wallet_qrcode"
              :alt="wallet.wallet_address"
              :width="qrSize"
              :height="qrSize"
            />
            <div class="wallet-info">
              <div class="wallet-label">{{ wallet.name.toUpperCase() }}</div>
              <div class="wallet-address">{{ wallet.wallet_address }}</div>
            </div>
          </div>
        </div>
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

.qr-code-list
  display flex
  flex-direction column

.qr-code-row
  display flex
  justify-content center
  align-items center

.qr-code-item
  margin 0 10px

.qr-code-wrapper
  display flex
  flex-direction column
  align-items center
  margin-bottom 20px

.wallet-info
  text-align center
</style>
