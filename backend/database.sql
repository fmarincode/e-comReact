-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ecosport_db
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ecosport_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ecosport_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ecosport_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `ecosport_db` ;

-- -----------------------------------------------------
-- Table `ecosport_db`.`account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecosport_db`.`account` (
  `idaccount` INT NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `pwd` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idaccount`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecosport_db`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecosport_db`.`product` (
  `idproduct` INT NOT NULL,
  `productname` VARCHAR(100) NOT NULL,
  `producttype` VARCHAR(100) NOT NULL,
  `price` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idproduct`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ecosport_db`.`product_has_account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecosport_db`.`product_has_account` (
  `product_idproduct` INT NOT NULL,
  `account_idaccount` INT NOT NULL,
  `buyingdate` DATETIME NULL,
  PRIMARY KEY (`product_idproduct`, `account_idaccount`),
  INDEX `fk_product_has_account_account1_idx` (`account_idaccount` ASC) VISIBLE,
  INDEX `fk_product_has_account_product_idx` (`product_idproduct` ASC) VISIBLE,
  CONSTRAINT `fk_product_has_account_product`
    FOREIGN KEY (`product_idproduct`)
    REFERENCES `ecosport_db`.`product` (`idproduct`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_has_account_account1`
    FOREIGN KEY (`account_idaccount`)
    REFERENCES `ecosport_db`.`account` (`idaccount`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
