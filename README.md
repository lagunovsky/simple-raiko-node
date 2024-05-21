# Simple raiko node

This project includes a set of scripts and configurations to set up and manage a [Raiko][raiko] instance.

## Prerequisites

- Ubuntu 22.04 with minimum kernel version 5.15
- Intel SGX-enabled CPU
- 2 CPU cores and 8GB memory
- 4GB minimum allocation for the "Enclave Page Cache Size"

More information can be found in the [README_Docker_and_RA.md][raiko-readme-docker-and-ra].

## Setup

#### 1. Subscribing to Intel PCS Service

To use ECDSA Attestation, you need to subscribe to the [Intel PCS service][intel-pcs-service], following the steps
in [Intel's how-to guide][intel-dcap-install-howto]. After subscribing to the service, you will receive two keys: a primary API key and a secondary API key.

#### 2. Clone the repository

```bash
git clone https://github.com/lagunovsky/simple-raiko-node
```

#### 3. Run the setup script

```bash
cd simple-raiko-node
./manage setup
```

- You may have to log in again. If this happens, just run the command again.
- PCCS password can be left empty if you do not have one.

## Switching to simple-raiko-node

If Raiko is already installed by instructions from the [README_Docker_and_RA.md][raiko-readme-docker-and-ra], all you need is to stop the running raiko instance by `docker compose down`.

## Available commands

- `./manage setup`     - prepare, check, configure, and register in one command
- `./manage prepare`   - install dependencies
- `./manage check`     - check FMSPC
- `./manage configure` - generate configuration files (.env, certificates, etc.)
- `./manage register`  - register your node onchain (can be used for re-registration)
- `./manage verify`    - verify that your raiko instance is running properly


[raiko]: https://github.com/taikoxyz/raiko

[raiko-readme-docker-and-ra]: https://github.com/taikoxyz/raiko/blob/taiko/alpha-7/README_Docker_and_RA.md

[intel-dcap-install-howto]: https://www.intel.com/content/www/us/en/developer/articles/guide/intel-software-guard-extensions-data-center-attestation-primitives-quick-install-guide.html

[intel-pcs-service]: https://api.portal.trustedservices.intel.com/products#product=liv-intel-software-guard-extensions-provisioning-certification-service
