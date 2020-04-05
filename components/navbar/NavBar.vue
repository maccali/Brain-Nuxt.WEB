<template>
  <div>
    <div class="container-fluid">
      <div class="container">
        <nav>
          <div class="dImg">
            <img src="/icon.png" alt />
          </div>
          <div>
            <i class="fas fa-address-card"></i>
            <i class="fas fa-address-card"></i>
            <i class="fas fa-address-card"></i>
            <i class="fas fa-address-card"></i>
            <i class="fas fa-address-card"></i>
            <i class="fas fa-address-card"></i>
            <i class="fas fa-address-card"></i>
            <i class="fas fa-address-card"></i>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
<style scoped>
.dImg {
  height: 70px;
  width: 70px;
  padding: 8px;
  border-radius: 50%;
}
.dImg img {
  height: 100%;
  width: 100%;
}
.container-fluid {
  display: flex;
  align-items: center;
  height: 70px;
  background-color: #e4e4e4;
}
nav {
  display: flex;
  justify-content: space-between;
}
</style>
