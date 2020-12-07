<template>
  <div>
    <div v-if="registerState">
      <v-img
        min-height="85vh"
        max-height="95vh"
        src="https://wht-public-assets.s3-us-west-2.amazonaws.com/web-images/register.png"
      >
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col>
              <v-container align="center" justify="center">
                <v-row>
                  <h1 style="color: white; margin-left: 10px">Register</h1>
                </v-row>
                <v-container
                  ><v-row
                    ><h5 style="color: white">
                      Post Comments, Share Trip Reports, Save Locations, and
                      More!
                    </h5></v-row
                  ></v-container
                >

                <v-form>
                  <v-text-field
                    dark
                    v-model="newUser.email"
                    prepend-icon="mdi-email"
                    label="Email"
                    name="email"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    dark
                    v-model="newUser.password"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    persistent-hint
                    hint="5 to 30 characters, must contain at least one lowercase letter, one uppercase letter, and one number."
                  ></v-text-field>

                  <v-text-field
                    dark
                    v-model="newUser.passConfirm"
                    id="confirm-password"
                    label="Confirm Password"
                    name="confirm-password"
                    prepend-icon="mdi-lock-open"
                    type="password"
                  ></v-text-field>
                </v-form>

                <v-alert v-if="message" type="error">
                  {{ message }}
                </v-alert>

                <router-link to="/login">
                  <h6>Already a member? Login here.</h6>
                </router-link>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    @click.prevent="signUp(newUser.email, newUser.password)"
                    color="dark-grey"
                  >
                    <v-progress-circular
                      style="margin-right: 5px"
                      indeterminate
                      color="#671d26"
                      v-if="isRegistering"
                    ></v-progress-circular
                    >Sign Up
                  </v-btn>
                </v-card-actions>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </div>
    <div v-if="confirmState">
      <v-img
        min-height="85vh"
        max-height="95vh"
        src="https://wht-public-assets.s3-us-west-2.amazonaws.com/web-images/register.png"
      >
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col>
              <v-container align="center" justify="center">
                <v-row>
                  <h1 style="color: white; margin-left: 10px">
                    Check your Email!
                  </h1>
                </v-row>
                <v-container></v-container>

                <v-form>
                  <v-text-field
                    dark
                    v-model="authCode"
                    prepend-icon="mdi-lock"
                    label="Auth Code"
                    name="auth"
                    type="text"
                  ></v-text-field>
                </v-form>

                <v-alert v-if="message" type="error">
                  {{ message }}
                </v-alert>

                <router-link to="/login">
                  <h6>Lost your code? Send another here.</h6>
                </router-link>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click.prevent="confirmSignUp()" color="dark-grey">
                    <v-progress-circular
                      style="margin-right: 5px"
                      indeterminate
                      color="#671d26"
                      v-if="isAuthorizing"
                    ></v-progress-circular
                    >Verify
                  </v-btn>
                </v-card-actions>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </div>
    <div v-if="loginState">
      <v-img
        min-height="85vh"
        max-height="95vh"
        src="https://wht-public-assets.s3-us-west-2.amazonaws.com/web-images/register.png"
      >
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col>
              <v-container align="center" justify="center">
                <v-row>
                  <h1 style="color: white; margin-left: 10px">Login</h1>
                </v-row>
                <v-container> </v-container>

                <v-form>
                  <v-text-field
                    dark
                    v-model="credentials.email"
                    prepend-icon="mdi-email"
                    label="Email"
                    name="email"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    dark
                    v-model="credentials.password"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    persistent-hint
                    hint="5 to 30 characters, must contain at least one lowercase letter, one uppercase letter, and one number."
                  ></v-text-field>
                </v-form>

                <v-alert v-if="message" type="error">
                  {{ message }}
                </v-alert>

                <router-link to="/login">
                  <h6>Need an account? Register here.</h6>
                </router-link>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click.prevent="login()" color="dark-grey">
                    <v-progress-circular
                      style="margin-right: 5px"
                      indeterminate
                      color="#671d26"
                      v-if="isLoggingIn"
                    ></v-progress-circular
                    >Log In
                  </v-btn>
                </v-card-actions>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </div>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";
export default {
  props: {
    registerState: Boolean,
    confirmState: Boolean,
    loginState: Boolean,
  },
  data() {
    return {
      authCode: "",
      credentials: {
        email: "",
        password: "",
      },
      newUser: {
        email: "",
        password: "",
        passConfirm: "",
      },
      isRegistering: false,
      message: "",
    };
  },
  methods: {
    async signUp(email, password) {
      this.isRegistering = true;
      const user = {
        username: this.newUser.email,
        password: this.newUser.password,
        attributes: { email: this.newUser.email },
      };
      await Auth.signUp(user)
        .then((data) => {
          console.log(data);
          this.registerState = false;
          this.confirmState = true;
          this.loginState = false;
          this.isRegistering = false;
        })
        .catch((err) => {
          console.log(err);
          this.isRegistering = false;
        });
    },
    async confirmSignUp() {
      await // After retrieveing the confirmation code from the user
      Auth.confirmSignUp(this.newUser.email, this.authCode)
        .then((data) => {console.log(data);
         this.registerState = false;
          this.confirmState = false;
          this.loginState = true;
        })
        .catch((err) => console.log(err));
    },
    async login() {
      Auth.signIn(this.credentials.email, this.credentials.password)
        .then((user) => {
            this.$store.state.user = user;
            this.$store.state.isLoggedIn = true;
            console.log(this.$store.state.user);
            alert("welcome to washington hometown!");
        })
        .catch((err) => this.message = err.message);
    },
  },
};
</script>

